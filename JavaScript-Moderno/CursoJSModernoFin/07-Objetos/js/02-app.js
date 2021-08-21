// Veamos como acceder a las propiedades de un objeto:

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


console.log(producto);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto['nombre']);




// Crear nuevo video...


// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";


// Finalmente para eliminar una propiedad se utiliza delete

delete producto.nombre;

console.log(producto);

// Algunas veces deseas asignar el valor de un objeto hacia una variable, veamos como hacerlo en el siguiente video