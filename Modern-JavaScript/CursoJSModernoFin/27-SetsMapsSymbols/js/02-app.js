// Weak se

var ws = new WeakSet();
const cliente = {
    nombre: 'Juan',
    saldo: 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

const nombre = 'Pedro';

ws.add(cliente); 
ws.add(cliente2);
// ws.add(nombre); // Solo se pueden agregar objetos

console.log( ws.has(cliente) ); 
console.log( ws.has(cliente2));  
// console.log( ws.has(nombre));  

// console.log( ws.delete(window)); 
console.log( ws.delete(cliente));
console.log( ws.has(cliente) ); 


// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.

