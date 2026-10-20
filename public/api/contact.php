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
$optionalFields = ['producto', 'numero_parte', 'landing_page', 'request_url', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
$context = [];
foreach ($optionalFields as $field) {
    $value = $_POST[$field] ?? '';
    if (!is_string($value) || strlen($value) > 1000) {
        respond(422, 'Completa todos los campos correctamente.');
    }
    $context[$field] = trim($value);
}

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
        'telefono TEXT NOT NULL, mensaje TEXT NOT NULL, producto TEXT NOT NULL DEFAULT \'\', numero_parte TEXT NOT NULL DEFAULT \'\', ' .
        'landing_page TEXT NOT NULL DEFAULT \'\', request_url TEXT NOT NULL DEFAULT \'\', utm_source TEXT NOT NULL DEFAULT \'\', ' .
        'utm_medium TEXT NOT NULL DEFAULT \'\', utm_campaign TEXT NOT NULL DEFAULT \'\', utm_term TEXT NOT NULL DEFAULT \'\', ' .
        'utm_content TEXT NOT NULL DEFAULT \'\', gclid TEXT NOT NULL DEFAULT \'\', creado_en TEXT NOT NULL, ip_hash TEXT NOT NULL)'
    );
    foreach (['producto', 'numero_parte', 'landing_page', 'request_url', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as $column) {
        try {
            $database->exec("ALTER TABLE leads ADD COLUMN {$column} TEXT NOT NULL DEFAULT ''");
        } catch (PDOException $migrationError) {
            if (!str_contains(strtolower($migrationError->getMessage()), 'duplicate column')) {
                throw $migrationError;
            }
        }
    }
    $statement = $database->prepare(
        'INSERT INTO leads (nombre, correo, telefono, mensaje, producto, numero_parte, landing_page, request_url, ' .
        'utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, creado_en, ip_hash) ' .
        'VALUES (:nombre, :correo, :telefono, :mensaje, :producto, :numero_parte, :landing_page, :request_url, ' .
        ':utm_source, :utm_medium, :utm_campaign, :utm_term, :utm_content, :gclid, :creado_en, :ip_hash)'
    );
    $statement->execute([
        ':nombre' => $name,
        ':correo' => $email,
        ':telefono' => $phone,
        ':mensaje' => $message,
        ':producto' => $context['producto'],
        ':numero_parte' => $context['numero_parte'],
        ':landing_page' => $context['landing_page'],
        ':request_url' => $context['request_url'],
        ':utm_source' => $context['utm_source'],
        ':utm_medium' => $context['utm_medium'],
        ':utm_campaign' => $context['utm_campaign'],
        ':utm_term' => $context['utm_term'],
        ':utm_content' => $context['utm_content'],
        ':gclid' => $context['gclid'],
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
$body = "Nombre: {$name}\nCorreo: {$email}\nTeléfono: {$phone}\nProducto: {$context['producto']}\nNúmero de parte: {$context['numero_parte']}\nPágina de entrada: {$context['landing_page']}\nURL de solicitud: {$context['request_url']}\nCampaña: {$context['utm_source']} / {$context['utm_medium']} / {$context['utm_campaign']}\n\nNecesidad:\n{$message}";
$headers = "From: formulario@turbosmexico.com.mx\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

// The lead is already protected in SQLite; email is a notification, not the source of truth.
if (!mail($recipient, $subject, $body, $headers)) {
    error_log('No se pudo enviar la notificación por correo de un lead.');
}

respond(200, 'Solicitud enviada. Un asesor se pondrá en contacto contigo.');
