"use strict";

// Como vimos en el video anterior los objetos si se pueden modificar sus valores, veamos como prevenirlo en caso de que sea algo que desees hacer.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);

// Para ello utilizaremos un Object Method o Métodos de objetos.

// Seguido me dicen, porque les dices Métodos, eso suena como algo de programación orientada a objetos
// En realidad ese es su nombre, object methods, y en los siguientes videos los estaremos viendo algunos que son muy útiles.

// Pero veamos como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:

Object.freeze( producto ); // Freeze toma como argumento el objeto

// producto.disponible = false;



// Freeze tampoco permite agregar nuevas propiedaes
// producto.imagen = "imagen.jpg";

// Tampoco se pueden eliminar propiedades

// delete producto.nombre;

// Finalmente si quieres revisar si un objeto esta congelado puedes usar

console.log( Object.isFrozen(producto) );

console.log(producto);
