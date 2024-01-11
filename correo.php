<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $name = $_POST["name"];
    $ciudad = $_POST["ciudad"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Construir el cuerpo del mensaje
    $body = "Nombre y Apellido: $name\n";
    $body .= "Ciudad: $ciudad\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensaje:\n$message";

    // Enviar el correo electrónico
    $to = "ignaciosoraka@gmail.com"; // Cambia esto con tu dirección de correo electrónico
    $subject = "Nuevo mensaje del formulario de contacto";

    // Encabezados para el correo electrónico
    $headers = "From: $email";

    // Intentar enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    // Si no es una solicitud POST, redirige a la página principal
    header("Location: index.html");
    exit();
}
?>