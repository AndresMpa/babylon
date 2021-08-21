// Async Await Con una API...

document.addEventListener('DOMContentLoaded', obtenerDatos);


// function obtenerDatos() {
//     fetch('https://picsum.photos/list') 
//         .then( respuesta => {
//             return respuesta.json()
//         }) 
//         .then(resultado => {
//             mostrarHTML(resultado);
//             console.log(resultado)
//         })
// }
 
async function obtenerDatos() {
    const resultado = await fetch('https://picsum.photos/list');
    const respuesta = await resultado.json();
    console.log(respuesta);

}

async function obtenerDatos() {
    try {
        const resultado = await fetch('https://picsum.photos/list');
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }

}