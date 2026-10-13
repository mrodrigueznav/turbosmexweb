<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

function respond(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Método no permitido.');
}

// Honeypot: bots often fill hidden fields; real users never see this one.
if (!empty($_POST['website'] ?? '')) {
    respond(200, 'Solicitud enviada correctamente.');
}

$fields = ['nombre', 'correo', 'telefono', 'mensaje'];
foreach ($fields as $field) {
    if (!isset($_POST[$field]) || !is_string($_POST[$field])) {
        respond(422, 'Completa todos los campos correctamente.');
    }
}

$name = trim($_POST['nombre']);
$email = trim($_POST['correo']);
$phone = trim($_POST['telefono']);
$message = trim($_POST['mensaje']);

if (
    $name === '' || $phone === '' || $message === '' ||
    strlen($name) > 120 || strlen($email) > 254 || strlen($phone) > 40 || strlen($message) > 4000 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    respond(422, 'Completa todos los campos correctamente.');
}

$documentRoot = $_SERVER['DOCUMENT_ROOT'] ?? dirname(__DIR__);
$databasePath = getenv('TURBOS_LEADS_DB') ?: dirname($documentRoot) . '/turbosmex-data/leads.sqlite';
$databaseDirectory = dirname($databasePath);

try {
    if (!is_dir($databaseDirectory) && !mkdir($databaseDirectory, 0700, true) && !is_dir($databaseDirectory)) {
        throw new RuntimeException('No se pudo preparar el almacenamiento.');
    }

    $database = new PDO('sqlite:' . $databasePath, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $database->exec(
        'CREATE TABLE IF NOT EXISTS leads (' .
        'id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, correo TEXT NOT NULL, ' .
        'telefono TEXT NOT NULL, mensaje TEXT NOT NULL, creado_en TEXT NOT NULL, ip_hash TEXT NOT NULL)'
    );
    $statement = $database->prepare(
        'INSERT INTO leads (nombre, correo, telefono, mensaje, creado_en, ip_hash) ' .
        'VALUES (:nombre, :correo, :telefono, :mensaje, :creado_en, :ip_hash)'
    );
    $statement->execute([
        ':nombre' => $name,
        ':correo' => $email,
        ':telefono' => $phone,
        ':mensaje' => $message,
        ':creado_en' => gmdate('c'),
        ':ip_hash' => hash('sha256', (string)($_SERVER['REMOTE_ADDR'] ?? '')),
    ]);
    @chmod($databasePath, 0600);
} catch (Throwable $error) {
    error_log('No se pudo guardar un lead: ' . $error->getMessage());
    respond(503, 'No pudimos guardar tu solicitud. Escríbenos por WhatsApp.');
}

$recipient = 'ventas@turbosmexico.com.mx';
$subject = 'Nueva solicitud desde turbosmexico.com.mx';
$body = "Nombre: {$name}\nCorreo: {$email}\nTeléfono: {$phone}\n\nNecesidad:\n{$message}";
$headers = "From: formulario@turbosmexico.com.mx\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

// The lead is already protected in SQLite; email is a notification, not the source of truth.
if (!mail($recipient, $subject, $body, $headers)) {
    error_log('No se pudo enviar la notificación por correo de un lead.');
}

respond(200, 'Solicitud enviada. Un asesor se pondrá en contacto contigo.');
