// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:


const numeros = [10,20,30,40,50];

const [primero, , segundo, tercero ] = numeros;


// console.log(numeros);
console.log(primero);
console.log(segundo);
console.log(tercero);

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

const [primero, , segundo, ...tercero ] = numeros;