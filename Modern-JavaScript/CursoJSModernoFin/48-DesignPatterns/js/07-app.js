
// Namespaces es un design pattern de organización de código, ayuda a evitar colision con nombres en el scope global de javascript.

// la idea del namespace es crear un objeto global alrededor de tu aplicación y agregar todas las funciones dentro en lugar de crear múltiples funciones y objetos que se puedan acceder de forma global.


const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú:`)
        platillos.forEach((platillo, index) => {
            console.log(`${index})  ${platillo.platillo} $ ${platillo.precio}`)
        });
    }
}

restaurApp.funciones.agregarPlatillo('Pastel', 20);
// console.log(restaurApp );
const { platillos} = restaurApp;

restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);