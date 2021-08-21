// Async Await con Function Declaration

function usuarioAutenticado() {
    return new Promise((resolve, reject) => {
        const autenticado = true;

        setTimeout( () => {
            if(autenticado) {
                resolve('El Usuario esta autenticado'); 
            } else {
                reject('Las credenciales son incorrectas');
                
            }            
        }, 3000);

    });
}

// Async await
const login = async () => {
    try {
        const respuesta = await usuarioAutenticado();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}


login();