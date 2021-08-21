// Currying y Partials...

// const suma = (a, b, c ) => { // Esto podría quedar como a + b + c
//     return a + b + c;
// }


// console.log(suma(1,2,3));

// Curring es dividir  una función que toma más de un parametro, en argumentos de forma parcial...

// Podriamos agregar un Currying de la siguiente forma...

const suma = (a,b,c) => a + b + c;

// const parcial = a => 
//     (b,c) =>  suma(a, b, c);
        
// const primerNumero = parcial(5);
// const resultado = primerNumero(4,3);
// console.log(resultado);

// Podriamos dividir más esta función... a que sea un argumento en cada ocasion...

const parcial = a => 
    b => 
        c => suma(a, b, c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

console.log(resultado);

// Otra opción seria...
const resultadoParcial = parcial(5)(5)(3)
console.log(resultadoParcial)