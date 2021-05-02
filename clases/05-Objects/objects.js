/* ------------------- Objetos ------------------------ */

/* Declaración de objetos, opción 1 */
console.log('--------- 1 ---------');
const objectNew = {};
console.log(objectNew);

/* Declaración de objetos, opción 2 */
console.log('--------- 2 ---------');
const objectNewV2 = new Object();
console.log(objectNewV2);

/* Declaración de objetos, opción 3 */
/* Arrays y objetos dentro de un objeto declarado */
console.log('--------- 3 ---------');
const objectPerson = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: { 
        tel: 1234,
        correo: 'lorem'
    }
}
console.log(objectPerson);

/* Acceder a los datos en un objeto, opción 1 */
/* Acceder mediante la declaración con [] */
console.log('--------- 4 ---------');
const objectPersonChris = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {
        tel: 1234,
        correo: 'lorem'
    }
}
console.log(objectPersonChris['nombre']);
console.log(objectPersonChris['contacto']);
console.log(objectPersonChris['contacto']['correo']);

/* Acceder a los datos en un objeto, opción 2 */
/* Acceder mediante la declaración con el punto "." */
console.log('--------- 5 ---------');
const objectPersonChrisV2 = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {
        tel: 1234,
        correo: 'lorem'
    },
    saludar: function () {
        console.log('Hola');
    }
}
console.log(objectPersonChrisV2.nombre);
console.log(objectPersonChrisV2.contacto);
console.log(objectPersonChrisV2.contacto.correo);
objectPersonChrisV2.saludar();

/* Acceder a valores del id o value del objeto */
/* EL (.keys) me da los ids del objeto
El (.values) me da los valores de las ids
El (.hasOwnProperty) pregunta si exite el id 'nombre' */
console.log('--------- 6 ---------');
const objectPersonChrisV3 = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {
        tel: 1234,
        correo: 'lorem'
    },
    saludar: function () {
        console.log('Hola');
    }
}
console.log(Object.keys(objectPersonChrisV3));
console.log(Object.values(objectPersonChrisV3));
console.log(objectPersonChrisV3.hasOwnProperty('nombre'));
/* ---------------------- Objetos ------------------------ */
