Kenny Alejandro Garces Cabrera

Se realizo un fork del repositorio original, lo que nos permite trabajar en una versión independiente del proyecto.

Se ha agregado un archivo .gitignore para excluir archivos y directorios específicos del control de versiones, manteniendo limpio el repositorio y enfocándonos en los archivos esenciales para el desarrollo, en este caso excluir /node_modules

DESCRIPCION 
Este proyecto se centra en la implementación de pruebas unitarias específicas para funciones clave. El objetivo principal es garantizar la calidad del código mediante pruebas exhaustivas que validen el comportamiento esperado de las funciones.

PRUEBAS UNITARIAS

Pruebas ARRAY.

    *Prueba para verificar que el array contiene el valor 'value1':
    En esta prueba, se utiliza la función toContain() para verificar si el array contiene el valor 'value1'. Se espera que esta afirmación sea verdadera, ya que 'value1' está presente en el array definido en el contexto de la prueba.

    *Prueba para verificar que el array contiene el valor 'value3':
    Similar a la primera prueba, aquí se utiliza toContain() para verificar si el array contiene el valor 'value3'. Se espera que esta afirmación también sea verdadera, ya que 'value3' está presente en el array definido en el contexto de la prueba.

    *Prueba para verificar que el array no contiene el valor 'UNAC':
    En esta prueba, se utiliza not.toContain() para verificar que el array no contiene el valor 'UNAC'. Se espera que esta afirmación sea verdadera, ya que 'UNAC' no está presente en el array definido en el contexto de la prueba. Esta prueba es importante para asegurarse de que el array no contiene ciertos valores no deseados.

Pruebas DIV.  

    *Prueba para una división correcta: Verifica que la función div devuelva el resultado correcto al dividir dos números, utilizando dos números enteros como argumentos para verificar el resultado mediante la funcion toBe().

    *Prueba controlada del error división por cero: Verifica que la función div lance un error al intentar dividir por cero, utilizando dos números enteros donde el divisor es cero y la función expect de Jest para verificar que se lance el error correcto.

Prubas MULTI.

    *Test para probar que 'n' es null: Esta prueba verifica que la variable 'n' sea nula utilizando la función toBeNull().

    *Test para probar que 'n' está definido (no es undefined): En esta prueba, se asegura que la variable 'n' esté definida y no sea undefined, utilizando la función toBeDefined().

    *Test para probar que 'number' es igual a 0: Se verifica que la variable 'number' sea igual a 0 mediante la función toBe(0).

    *Test para probar que 'notTrue' es false: Esta prueba confirma que la variable 'notTrue' sea igual a false, utilizando toBe(false).

    *Test para probar que 'notFalse' es true: Por último, se asegura que la variable 'notFalse' sea igual a true mediante toBe(true)

Pruebas STRING

    *Test para probar que "anything" contiene "UN"': Verifica que la constante 'anything' contiene la cadena "UN" utilizando el método 'toContain'. Esta prueba asegura que la constante 'anything' cumple con la expectativa de contener la subcadena específica "UN".

    *Test para probar que "anything" no contiene "P": Asegura que la constante 'anything' no contiene la letra "P" utilizando 'not.toContain', garantizando que la constante no incluya dicha letra.

    *Test para probar que "anything1" contiene la letra "n":Comprueba que la constante 'anything1' contiene la letra "n" utilizando 'toContain'. 

Pruebas SUM

    *Test para probar que una suma de dos valores es mayor a 10: Verifica si una suma de dos valores es  mayor a 10 utilizando 'toBeGreaterThan'.

    *Test para probar que una suma de dos valores es mayor o igual a 20: Comprueba si una suma de dos valores es mayor o igual a 20 utilizando 'toBeGreaterThanOrEqual'.

    *Test para probar que una suma de dos valores es menor o igual a 8: Asegura que una suma de dos valores es menor o igual a 8 utilizando 'toBeLessThanOrEqual'.

    *Test para probar que una suma de dos valores es menor a 12: Verifica si una suma de dos valores es menor a 12 utilizando 'toBeLessThan'.

    *Test para probar que una suma de dos valores es igual a 9: Comprueba si una suma de dos valores es igual a 9 utilizando 'toEqual'.
