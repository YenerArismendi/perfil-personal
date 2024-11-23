// Codigo para enviar mensajes
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

// Codigo para mostrar la edad dependiendo del año de nacimiento
<!-- Lista donde se mostrará la edad -->

    // Función para calcular la edad
    function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth();
    const dia = hoy.getDate();

    // Ajustar si no ha pasado su cumpleaños este año
    if (mes < nacimiento.getMonth() || (mes === nacimiento.getMonth() && dia < nacimiento.getDate())) {
    edad--;
}

    return edad;
}

    // Fecha de nacimiento (puedes cambiarla por la fecha que desees)
    const fechaNacimiento = '2003-04-04'; // Ejemplo: 21 de noviembre de 2003

    // Mostrar la edad calculada
    document.getElementById('edad').textContent = calcularEdad(fechaNacimiento) + ' años';

