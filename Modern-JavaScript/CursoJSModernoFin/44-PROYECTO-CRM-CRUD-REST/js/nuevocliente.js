import { nuevoCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    async function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre, 
            email, 
            telefono,
            empresa
        }

        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        await nuevoCliente(cliente);
        window.location.href = 'index.html';
    }


   

    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }

   
})();