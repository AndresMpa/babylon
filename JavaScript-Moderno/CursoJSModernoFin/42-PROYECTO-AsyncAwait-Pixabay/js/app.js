
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

let paginaActual = 1;
let totalPaginas;
let iteradorSiguiente;

window.onload = () => {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarFormulario);
    paginacionDiv.addEventListener('click', direccionPaginacion);
};

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === '') {
        // mensaje de error
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}


// Muestra una alerta de error o correcto
function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

3961091175

// NUEVO: Busca las imagenes en una API
async function buscarImagenes() {
    const terminoBusqueda = document.querySelector('#termino').value;

    const key = '1732750-d45b5378879d1e877cd1d35a6';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=30&page=${paginaActual}`;

   const respuesta = await fetch(url);
   const resultado = await respuesta.json()
   
   totalPaginas = calcularPaginas(resultado.totalHits);

   // console.log(totalPaginas)
   mostrarImagenes(resultado.hits);
   
}

function mostrarImagenes(imagenes, paginas ) {

    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach( imagen => {

        const { likes, views, previewURL, largeImageURL } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text">${likes} Me Gusta</p>
                        <p class="card-text">${views} Vistas </p>
        
                        <a href=${largeImageURL} target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
                    </div>
                </div>
            </div>
            `;
    });


    if(!iteradorSiguiente) {
        crearPaginacion();
    }
 
}

function crearPaginacion() {
    // recorrer el iterador
    iteradorSiguiente = paginaSiguiente(totalPaginas);
    while( true ) {
        const { value, done } = iteradorSiguiente.next();

        if(done) return;

        // Crear botón de sig
        const botonSiguiente = document.createElement('a');
        botonSiguiente.href = "#";
        botonSiguiente.dataset.pagina = value;
        botonSiguiente.textContent = value;
        botonSiguiente.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'mx-auto', 'mb-10', 'font-bold', 'uppercase', 'rounded');
        paginacionDiv.appendChild(botonSiguiente);
    }
}

function calcularPaginas(total) {
    return parseInt( Math.ceil( total / 30 ));
}


// Crear el generador
function *paginaSiguiente(total) {
    console.log(total);
    for( let i = 1; i <= total; i++) {
        yield i;
    }
}

function direccionPaginacion(e) {
    if(e.target.classList.contains('siguiente')) {

        paginaActual= Number( e.target.dataset.pagina);
        buscarImagenes();
        formulario.scrollIntoView();
    }
}