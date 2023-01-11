<?php
echo "<pre>";
    print_r($_POST);
echo '</pre>';

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "mlcesena@yahoo.com";
$body = "";

$body .= "From: " . $name . "\r\n";
$body .= "Email: " . $email . "\r\n";
$body .= "Message: " . $message . "\r\n";

mail($to, $subject, $body);
?>