<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Método no permitido.']);
    exit;
}

// Honeypot: bots often fill hidden fields; real users never see this one.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['message' => 'Solicitud enviada correctamente.']);
    exit;
}

$name = trim((string)($_POST['nombre'] ?? ''));
$email = trim((string)($_POST['correo'] ?? ''));
$phone = trim((string)($_POST['telefono'] ?? ''));
$message = trim((string)($_POST['mensaje'] ?? ''));

if ($name === '' || $phone === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['message' => 'Completa todos los campos correctamente.']);
    exit;
}

$recipient = 'ventas@turbosmexico.com.mx';
$subject = 'Nueva solicitud desde turbosmexico.com.mx';
$body = "Nombre: {$name}\nCorreo: {$email}\nTeléfono: {$phone}\n\nNecesidad:\n{$message}";
$headers = "From: formulario@turbosmexico.com.mx\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (!mail($recipient, $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(['message' => 'No pudimos enviar la solicitud. Escríbenos por WhatsApp.']);
    exit;
}

echo json_encode(['message' => 'Solicitud enviada. Un asesor se pondrá en contacto contigo.']);
