<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Built-in Diagnostic Test (Visit in browser: /api/send-inquiry.php?test=1)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mailFunctionExists = function_exists('mail');
    $testResult = false;

    if (isset($_GET['test'])) {
        $to = "contact@rrinfra.co.in";
        $subject = "RR Infra Mail Diagnostic Test - " . date('Y-m-d H:i:s');
        $body = "This is a diagnostic test email from https://rrinfra.co.in/api/send-inquiry.php to verify server mail delivery.";
        $headers = "From: RR Infra Website <noreply@rrinfra.co.in>\r\n" .
                   "Bcc: rrconstruct1709@gmail.com\r\n" .
                   "X-Mailer: PHP/" . phpversion();
        $testResult = @mail($to, $subject, $body, $headers, "-fnoreply@rrinfra.co.in");
        if (!$testResult) {
            $testResult = @mail($to, $subject, $body, $headers);
        }
    }

    echo json_encode([
        'status' => 'Inquiry API is active and ready',
        'php_version' => phpversion(),
        'mail_function_enabled' => $mailFunctionExists,
        'test_mail_sent' => isset($_GET['test']) ? $testResult : 'Run ?test=1 to dispatch test email',
        'leads_log_writable' => is_writable(__DIR__),
        'server_time' => date('Y-m-d H:i:s T')
    ], JSON_PRETTY_PRINT);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Accept both FormData ($_POST) and JSON input (php://input)
$data = [];
if (!empty($_POST)) {
    $data = $_POST;
} else {
    $rawInput = file_get_contents('php://input');
    if ($rawInput) {
        $decoded = json_decode($rawInput, true);
        if (is_array($decoded)) {
            $data = $decoded;
        }
    }
}

$name    = html_entity_decode(trim(strip_tags($data['name'] ?? '')), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = html_entity_decode(trim(strip_tags($data['phone'] ?? '')), ENT_QUOTES, 'UTF-8');
$segment = html_entity_decode(trim(strip_tags($data['segment'] ?? 'General Inquiry')), ENT_QUOTES, 'UTF-8');
$message = html_entity_decode(trim(strip_tags($data['message'] ?? '')), ENT_QUOTES, 'UTF-8');

// Flexible validation: Name is required, and at least Phone or Email
if (empty($name) || (empty($phone) && empty($email))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide your Name and at least a Phone number or Email address.']);
    exit;
}

if (empty($message)) {
    $message = "Project inquiry submitted via rrinfra.co.in for " . $segment;
}

// 1. SAVE LEAD TO LOCAL BACKUP FILE (Permanent server log)
$leadEntry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name'      => $name,
    'phone'     => $phone ?: 'Not Provided',
    'email'     => $email ?: 'Not Provided',
    'segment'   => $segment,
    'message'   => $message,
    'ip'        => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

$logFile = __DIR__ . '/leads_backup.json';
$existingLeads = [];
if (file_exists($logFile)) {
    $content = @file_get_contents($logFile);
    if ($content) {
        $existingLeads = json_decode($content, true) ?: [];
    }
}
$existingLeads[] = $leadEntry;
@file_put_contents($logFile, json_encode($existingLeads, JSON_PRETTY_PRINT));

// 2. DISPATCH EMAIL TO GOOGLE WORKSPACE & BACKUP INBOX
$toEmail = "contact@rrinfra.co.in";
$backupEmail = "rrconstruct1709@gmail.com";
$subject = "New Inquiry: " . $name . " - " . $segment . " [RR Infra]";

// Compose HTML Email Body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; color: #0A1B33; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-top: 5px solid #C99A46; }
        .header { background: #0A1B33; padding: 25px 30px; color: #ffffff; text-align: center; }
        .header h2 { margin: 0 0 5px; color: #C99A46; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; }
        .header p { margin: 0; font-size: 13px; color: #F5F1E8; opacity: 0.8; }
        .content { padding: 30px; }
        .field-group { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
        .field-group:last-child { border-bottom: none; }
        .label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #888888; letter-spacing: 1px; margin-bottom: 4px; }
        .value { font-size: 15px; color: #0A1B33; font-weight: 600; }
        .message-box { background: #F5F1E8; padding: 15px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #12233F; font-weight: normal; margin-top: 5px; }
        .footer { background: #f9f9f9; padding: 15px 30px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>RR CONSTRUCTIONS &amp; RR INFRA</h2>
            <p>New Project Inquiry &bull; Website Lead</p>
        </div>
        <div class='content'>
            <div class='field-group'>
                <div class='label'>Client Name</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field-group'>
                <div class='label'>Phone Number</div>
                <div class='value'><a href='tel:" . htmlspecialchars($phone) . "' style='color: #C99A46; text-decoration: none; font-weight: bold;'>" . htmlspecialchars($phone) . "</a></div>
            </div>
            <div class='field-group'>
                <div class='label'>Email Address</div>
                <div class='value'>" . ($email ? "<a href='mailto:" . htmlspecialchars($email) . "' style='color: #0A1B33;'>" . htmlspecialchars($email) . "</a>" : "Not Provided") . "</div>
            </div>
            <div class='field-group'>
                <div class='label'>Construction Segment</div>
                <div class='value' style='color: #C99A46;'>" . htmlspecialchars($segment) . "</div>
            </div>
            <div class='field-group'>
                <div class='label'>Project Requirements / Scope</div>
                <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
        <div class='footer'>
            Submitted via rrinfra.co.in website &bull; " . date('d M Y, h:i A') . " IST
        </div>
    </div>
</body>
</html>
";

// Headers
$senderEmail = "noreply@rrinfra.co.in";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: RR Infra Website <" . $senderEmail . ">\r\n";
$headers .= "Bcc: " . $backupEmail . "\r\n";
if ($email) {
    $headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
} else {
    $headers .= "Reply-To: " . $senderEmail . "\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$extraParams = "-f" . $senderEmail;

// Send Mail
$mailSent = @mail($toEmail, $subject, $emailBody, $headers, $extraParams);

if (!$mailSent) {
    $mailSent = @mail($toEmail, $subject, $emailBody, $headers);
}

echo json_encode([
    'success' => true,
    'mail_dispatched' => (bool)$mailSent,
    'message' => 'Thank you! Your project inquiry has been received and saved.'
]);
?>
