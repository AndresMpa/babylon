"use strict";
// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

Object.seal(producto);

// Se pueden reasignar
producto.nombre = 'Tablet';

// Pero no eliminar
// delete producto.precio;


// Tampoco se pueden añadir nuevas
// producto.imagen = "imagen.jpg";

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto))

console.log(producto);