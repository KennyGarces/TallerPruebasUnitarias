import {sum} from './sum';

// Pruebas unitarias para la funcion sum 
describe('Pruebas unitarias para la función sum', () => {
  
    // Prueba para verificar que una suma de dos valores es mayor a 10
    test('Probar que una suma de dos valores es mayor a 10', () => {
      expect(sum(10, 5)).toBeGreaterThan(10); // Verifica si la suma es mayor a 10
    });
  
    // Prueba para verificar que una suma de dos valores es mayor o igual a 20
    test('Probar que una suma de dos valores es mayor o igual a 20', () => {
      expect(sum(10, 10)).toBeGreaterThanOrEqual(20); // Verifica si la suma es mayor o igual a 20
    });
  
    // Prueba para verificar que una suma de dos valores es menor o igual a 8
    test('Probar que una suma de dos valores es menor o igual a 8', () => {
      expect(sum(4, 4)).toBeLessThanOrEqual(8); // Verifica si la suma es menor o igual a 8
    });
  
    // Prueba para verificar que una suma de dos valores es menor a 12
    test('Probar que una suma de dos valores es menor a 12', () => {
      expect(sum(3,5 )).toBeLessThan(12); //Verifica si la suma es menor a 12
    });
  
    // Prueba para verificar que una suma de dos valores es igual a 9
    test('Probar que una suma de dos valores es igual a 9', () => {
      expect(sum(7, 2)).toEqual(9); //Verifica si la suma es igual a 9
    });
  });