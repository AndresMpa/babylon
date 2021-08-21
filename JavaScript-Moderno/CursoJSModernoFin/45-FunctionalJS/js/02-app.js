// Pasar funciones como argumentos..

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOmultiplicar = fn => fn(10, 20);

console.log( sumarOmultiplicar( sumar ) );
console.log( sumarOmultiplicar( multiplicar ) );

