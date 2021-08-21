// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}


const { nombre, informacion, informacion: { peso, medida } } = producto;


console.log(nombre)
console.log(informacion)
console.log(peso)
console.log(medida)