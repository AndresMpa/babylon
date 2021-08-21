// En este video estaremos viendo Object.keys y object.values y entries, estos son más conocidos como iteradores de objetos, 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


console.log(Object.keys(producto));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores


// Y con eso tenemos un buen conocimiento de Objectos en JavaScript, los estaremos retomando más adelante pero primero hay que conocer otros conceptos como Arreglos y Funciones para poderle sacar más provecho.