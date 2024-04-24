
import { anything, anything1 } from './string';

// Pruebas unitarias para las constantes 
describe('Pruebas unitarias para las constantes', () => {
  
    // Prueba para verificar si la constante 'anything' contiene la cadena "UN"
    test('Probar que "anything" contiene "UN"', () => {
      expect(anything).toContain("UN"); // Verificamos si la cadena "UN" está contenida en 'anything'
    });
  
    // Prueba para verificar si la constante 'anything' no contiene la letra "P"
    test('Probar que "anything" no contiene "P"', () => {
      expect(anything).not.toContain("P"); //Verificamos que la cadena "P" no está contenida en 'anything'
    });
  
    // Prueba para verificar si la constante 'anything1' contiene la letra "n"
    test('Probar que "anything1" contiene la letra "n"', () => {
      expect(anything1).toContain("n"); // Verificamo si la letra "n" está contenida en 'anything1'
    });
  });