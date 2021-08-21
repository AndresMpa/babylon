const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Juan Pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    })
})