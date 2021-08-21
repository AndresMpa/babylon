(function() {

    let DB;
    let idCliente;
    const formulario = document.querySelector('#formulario');
   
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');

    document.addEventListener('DOMContentLoaded', () => {


        conectarDB();

        //
        formulario.addEventListener('submit', actualizarCliente);


        // Verificar si el cliente existe
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        if(idCliente) {
   
            setTimeout( () => {
                obtenerCliente(idCliente);
            }, 100);
        }

    });


    function conectarDB() {
        // ABRIR CONEXIÓN EN LA BD:

        let abrirConexion = window.indexedDB.open('crm', 1);

        // si hay un error, lanzarlo
        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };
     
        // si todo esta bien, asignar a database el resultado
        abrirConexion.onsuccess = function() {
            // guardamos el resultado
            DB = abrirConexion.result;
        };
    }


    function obtenerCliente(id) {
  
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        console.log(objectStore);

        var request = objectStore.openCursor();
        request.onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                if(cursor.value.id  == id ) {
                    // pasar el que estamos editando...
                    llenarFormulario(cursor.value);
                }
                cursor.continue();          
            }
        };

    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, empresa, telefono } = datosCliente;
         nombreInput.value = nombre;
         emailInput.value = email;
         empresaInput.value = empresa;
         telefonoInput.value = telefono;
    }

    function actualizarCliente(e) {
        e.preventDefault();

        if( nombreInput.value === '' || emailInput.value === '' || empresaInput.value === '' || telefonoInput.value === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // actualizar...
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number( idCliente )
        };

        console.log(clienteActualizado)


        // actualizar...
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = () => {
            imprimirAlerta('Editado Correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };

        transaction.onerror = (error) => {
            console.log(error);
            console.log('Hubo un errorr.');
        };
    }


    function imprimirAlerta(mensaje, tipo) {
        // Crea el div

        const divMensaje = document.createElement('div');
        divMensaje.classList.add( "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );

        if(tipo === 'error') {
           divMensaje.classList.add('bg-red-100', "border-red-400", "text-red-700");
        } else {
            divMensaje.classList.add('bg-green-100', "border-green-400", "text-green-700");
        }
        
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
       formulario.appendChild(divMensaje);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

    

})();