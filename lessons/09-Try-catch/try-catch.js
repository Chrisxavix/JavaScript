/* ------------- Control de errores --------------- */

/* Estructura del control de errores */
/* El try contiene el código que será evaluado
El catch contiene los errores en caso de presentarse, 
El finally siempre se ejecuta, haya o no errores. */
console.log('--------- 1 ---------');
try {
    console.log('Se agrega el código a evaluar');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
}

/* Error generado con (test), ya que no está definida, por lo que encuentra el error */
console.log('--------- 2 ---------');
try {
    console.log('Se agrega el código a evaluar');
    test;
    console.log('Segundo mensaje');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
}

/* Error generado con el tipo de dato
Usando (isNaN) para conocer si es un número.
Throw para errores personalizados
console.trace(), indica la línea de error. */
console.log('--------- 3 ---------');
try {
    let numero = 'lo';
    if (isNaN(numero)) {
        throw new Error('El caracter no es un número.')
    }
    console.log(numero * numero);
} catch (error) {
   console.trace(`Se produjo el error:  ${error}`);
}
/* --------------- Control de errores ----------------- */
