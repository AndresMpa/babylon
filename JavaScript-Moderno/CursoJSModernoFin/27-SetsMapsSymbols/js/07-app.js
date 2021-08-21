
// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de  la palabra function

// Generador

function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilziar para iterar...
    yield 1;
    yield 'Nombre';
    yield 3 +3;
    yield true;
}
// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);


// Crear el generador
function *nuevoGenerador(carrito) {
    for( let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}
// carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
let iterador = nuevoGenerador(carrito);

console.log(iterador.next() );
console.log(iterador.next() );
console.log(iterador.next() );
console.log(iterador.next() );
console.log(iterador.next() );