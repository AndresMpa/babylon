// En javascript hay un objeto llamado Date
const diaHoy = new Date();
let valor;

// En este momento
Date.now();


// Date es Mes, dia y año
let cumple = new Date('1-5-1987');
cumple = new Date('January 5 1987');



// .toString lo cambiaria de object a string

console.log(typeof valor)

// Convertir fecha a string

// cumple.toString();
valor = cumple;

valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2018);

console.log(valor);