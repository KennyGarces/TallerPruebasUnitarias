import { arrayContainsValue, arrayNotContainsValue } from './array';

// Pruebas unitarias para la función arrayContainsValue
describe('Pruebas para arrayContainsValue', () => {
    const array = ['value1', 'value2', 'value3'];

    // Prueba para verificar que el array contiene el valor: value1
    test('Debe retornar true cuando el array contiene el valor value1', () => {
        expect(array).toContain('value1');
    });

    // Prueba para verificar que el array contiene el valor: value3
    test('Debe retornar true cuando el array contiene el valor value3', () => {
        expect(array).toContain('value3');
    });
});

// Prueba unitaria para la función arrayNotContainsValue
describe('Prueba para arrayNotContainsValue', () => {
    const array = ['value1', 'value2', 'value3'];

    // Prueba para verificar que el array no contiene el valor 'UNAC'
    test('Debe retornar false cuando el array no contiene el valor UNAC', () => {
        expect(array).not.toContain('UNAC');
    });
});
