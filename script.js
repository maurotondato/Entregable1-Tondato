let compra = 0;
let productos = "Usted ha realizado ofertas por los siguientes productos:";

const productosDisponibles = [
    { nombre: "Monoambiente" },
    { nombre: "Departamento dos ambientes" },
    { nombre: "Duplex" },
    { nombre: "Casa quinta" }
];

function solicitarDatosPersonales() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const telefono = Number(prompt("Ingresa tu número de teléfono:"));

    if (isNaN(telefono)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    return { nombre, telefono };
}

function logicaDeCompra(producto) {
    const oferta = Number(prompt(`¿Cuánto estás dispuesto a pagar por el/a ${producto.nombre}?`));

    if (isNaN(oferta) || oferta <= 0) {
        alert("Por favor, ingresa un valor válido.");
        return;
    }

    alert(`Muchas gracias por tu oferta de $${oferta}. Nos comunicaremos contigo pronto.`);
    productos += `\n- ${producto.nombre}: $${oferta}`;
}

function core() {
    const usuario = solicitarDatosPersonales();
    alert(`Hola ${usuario.nombre}, gracias por registrarte. Ahora podrás hacer tu oferta por las propiedades.`);

    let bandera = true;

    while (bandera) {
        let opciones = productosDisponibles.map((producto, index) => `${index + 1}. ${producto.nombre}`).join("\n");
        let opcion = Number(prompt(`Bienvenidos a Mauro Bienes Raíces\nPor favor, selecciona la propiedad para realizar tu oferta:\n${opciones}`));

        if (opcion >= 1 && opcion <= productosDisponibles.length) {
            let productoSeleccionado = productosDisponibles[opcion - 1];
            logicaDeCompra(productoSeleccionado);
        } else {
            alert("No has ingresado un número válido.");
        }

        bandera = confirm("¿Deseas hacer más ofertas?");
    }

    alert(`${productos}`);
}

core();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iniciarOferta").addEventListener("click", core);
});

