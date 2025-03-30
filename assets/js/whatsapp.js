let producto = "Hamburguesa Especial";
let precio = 25000;
let imagenURL = "https://yenerarismendi.github.io/perfil-personal/assets/img/portatil.jpg"; // URL pública

let mensaje = `Hola, estoy interesado en el producto: *${producto}* por $${precio}.%0A%0A📷 Mira la imagen aquí: ${imagenURL}`;
let url = `https://wa.me/+573154424707?text=${encodeURIComponent(mensaje)}`;

document.getElementById("whatsappLink").href = url;