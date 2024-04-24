
import { n, number, notTrue, notFalse } from './multi';

// Pruebas unitarias para la función arrayContainsValue
describe('Pruebas unitarias para las variables', () => {
    
    test('Probar que \'n\' es null', () => {
        expect(n).toBeNull(); // Verificamos que la variable 'n' sea null
    });

    test('Probar que \'n\' está definido (no es undefined)', () => {
        expect(n).toBeDefined(); // Verificamos que la variable 'n' esté definida y no sea undefined
    });

    test('Probar que \'number\' es igual a 0', () => {
        expect(number).toBe(0); // Verificamos que la variable 'number' sea igual a 0
    });

    test('Probar que \'notTrue\' es false', () => {
        // Assert
        expect(notTrue).toBe(false); // Verificamos que la variable 'notTrue' sea igual a false
    });

    test('Probar que \'notFalse\' es true', () => {
        expect(notFalse).toBe(true); // Verificamos que la variable 'notFalse' sea igual a true
    });
});
