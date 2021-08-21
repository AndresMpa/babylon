// Constructor Pattern es cuando utilizamos una clase base 


class Persona {
    constructor(nombre, email, empresa) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Código Con Juan');
console.log(cliente);