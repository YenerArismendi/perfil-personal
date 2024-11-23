(function () {
    emailjs.init('UFzuEZyQWG3lpx83C'); // Inicializa con tu clave de EmailJS
})();

document.querySelector('.php-email-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_p15str3', 'template_7mj2uv8', this)
        .then(function () {
            // Mensaje de éxito con SweetAlert
            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(function () {
                // Limpia los campos del formulario cuando se hace clic en "Aceptar"
                document.querySelector('.php-email-form').reset();
            });
        }, function (error) {
            // Mensaje de error con SweetAlert
            Swal.fire({
                title: '¡Error!',
                text: 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
});
