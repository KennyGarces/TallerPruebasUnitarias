import { div } from './div'; 

// Pruebas unitarias para la funcion div.
describe('Pruebas unitarias para la función div', () => {
    test('Prueba para una división correcta', () => {
        //Definimos los numeros para realizar la division
        const a = 30;
        const b = 3;
        //Obtemos el resultado de la division
        const resultado = div(a, b);
        //Comprobamos
        expect(resultado).toBe(10); // Esperamos que el resultado de la división sea 5
    });

    test('Prueba controlada del error división por cero', () => {
        //Definimos los numeros para realizar la division entre 0
        const a = 30;
        const b = 0;

        //Comprobamos que la funcion ejecuta un error
        expect(() => div(a, b)).toThrowError('No se puede dividir por cero'); // Esperamos que la función lance un error
    });
});
