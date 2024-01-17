<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y limpiar los datos del formulario
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $telefono = filter_var($_POST["telefono"], FILTER_SANITIZE_NUMBER_INT);

    // Validar los datos (puedes agregar más validaciones según tus necesidades)

    // Configurar el destinatario del correo
    $destinatario = "hola@edgarmontoya.mx"; // Cambia esto por tu dirección de correo electrónico

    // Construir el cuerpo del correo
    $mensaje = "Nuevo mensaje del formulario:\n\n";
    $mensaje .= "Nombre: $nombre\n";
    $mensaje .= "Email: $email\n";
    $mensaje .= "Teléfono: $telefono\n";

    // Enviar el correo
    $envioCorreo = mail($destinatario, "Nuevo mensaje del formulario", $mensaje);

    // Verificar si el correo se envió correctamente
    if ($envioCorreo) {
        // Redirigir a WhatsApp
        header("Location: https://api.whatsapp.com/send?phone=+5214426673811&text=Hola,%20quiero%20ayuda");
        exit();
    } else {
        echo "Error al enviar el correo. Por favor, intenta nuevamente.";
    }
}
?>
