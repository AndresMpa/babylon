
// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
console.log(carrito.size);


// En un arreglo
let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
console.log(numeros.size);


let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');


// Comprobando que un valor existe en el set.
console.log( carrito.has('Camisa') );

// Eliminando del set
console.log( carrito.delete('Camisa') );
console.log( carrito.has('Camisa') );
console.log(carrito);

// Limpiar un set
carrito.clear();
console.log(carrito);

// Foreach a un set
carrito.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);


