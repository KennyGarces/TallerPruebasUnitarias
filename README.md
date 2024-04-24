Kenny Alejandro Garces Cabrera

___CONFIGURACION DEL PROYECTO
Se realizo un fork del repositorio original, lo que nos permite trabajar en una versión independiente del proyecto.

Se ha agregado un archivo .gitignore para excluir archivos y directorios específicos del control de versiones, manteniendo limpio el repositorio y enfocándonos en los archivos esenciales para el desarrollo, en este caso excluir /node_modules.

Se ha ejecutado en la terminal el comando "npm install" para instalar todas las dependencias especificadas en el archivo package.json. "NECESARIO PARA EJECUTAR EL PROGRAMA"

Se ha definido en el Script del package.json la siguiente linea "test": "jest"

___DESCRIPCION 
Este proyecto se centra en la implementación de pruebas unitarias específicas para funciones clave. El objetivo principal es garantizar la calidad del código mediante pruebas exhaustivas que validen el comportamiento esperado de las funciones.

___PRUEBAS UNITARIAS
Se han desarrollado las siguientes pruebas unitarias, teniendo en cuenta lo especificado en el documento compartido, asignado el mismo nombre del archivo de la funcion al archivo de prueba, anexando la sigueinte linea ".test.ts" ejmeplo, sum.test.ts 

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

___METODOS DE EJECUCION DE LAS PRUEBAS UNITARIAS

*Para ejecutar todas las pruebas unitarias al mismo tiempo se hace uso del siguiente comando:

    npm test 

*Para Para ejecutar las pruebas unitarias para cada funcion de forma individual se hace uso del comando npm test -- {nombre} agregando el nombre del archivo de la siguiente manera:

    npm test -- array.test.ts  //Ejecucion de las pruebas ARRAY
    npm test -- div.test.ts    //Ejecucion de las pruebas DIV
    npm test -- multi.test.ts  //Ejecucion de las pruebas MULTI 
    npm test -- string.test.ts //Ejecucion de las pruebas STRING
    npm test -- sum.test.ts    //Ejecucion de las pruebas SUM

___COMMITS

Primer commit: Archivo README con nombre, configuracion, archivo .gitinore, Archivos de prueba, pruebas para las funciones array, div y multi realizadas.

Segundo commit: Pruebas para las funciones string y sum realizadas, descripcion en archivo README de las pruebas.

Tercer commit: Complemento de informacion en el archivo README.

__NOTA:
No se hizo uso del Pull Requests, el trabajo se hizo de forma individual, por lo que no se hizo necesario solicitar permiso para proponer cambios en el código.