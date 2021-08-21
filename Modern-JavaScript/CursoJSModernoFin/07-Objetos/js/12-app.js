// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo() );