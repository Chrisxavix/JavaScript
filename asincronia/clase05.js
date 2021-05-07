/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
2) Asincronía y Event Loop: Linea 51
3) Callbacks: Línea 104
4) Promesas: Línea 128
5) Async Await: Línea 181
*/

/* 2) ------------ Asincronía y Event Loop ------------- */

/* Código Síncrono Bloqueante */
/* (() => {
    console.log('Código Síncrono');
    console.log('inicio');
    function dos(){
        console.log('Dos');
    }  
    function uno(){
        console.log('Uno');
        dos();
        console.log('Tres');
    } 
    uno();
    console.log('Fin');
})() */
/* Imprime: 
Código Síncrono
inicio
Uno
Dos
Tres
Fin */

/* Código Asíncrono No Bloqueante */
/* (() => {
    console.log('Código Asíncrono');
    console.log('inicio');
    function dos(){
        setTimeout(function () {
            console.log('Dos');
        }, 1000 )  
    }  
    function uno(){
        setTimeout(function () {
            console.log('Uno');
        },0 )  
    dos();
    console.log('Tres');
    } 
    uno();
    console.log('Fin');
})(); */
/* Imprime: 
Código Asíncrono
inicio
Tres
Fin
Uno
Dos */
/* 2) ------------ Asincronía y Event Loop ------------- */

/* 3) ----------------- Callbacks ---------------------- */

/* Llamada de vuelta
Función que se ejecuta después de que otra lo haga */

/* function cuadradoCallBack(value, callback) {
    setTimeout(() => {
        callback(value, value*value)
    }, 0 | Math.random()*1000)
}
cuadradoCallBack(0, (value, result) => {
    console.log('inicia callback');
    console.log(`Callback ${value}, ${result}`);
    cuadradoCallBack(1, (value, result) => {
        console.log(`Callback ${value}, ${result}`);
    })
}) */
/* Imprime:
inicia callback
Callback 0, 0
Callback 1, 1 */

/* 3) ----------------- Callbacks ---------------------- */

/* 4) ------------------ Promesas ---------------------- */

/* Promise.reject, parte que resuelve y rechaza la promesa 
El resolve(line138) es como la parte positiva en return 
El reject es el retorno negativo */
/*function cuadradoPomise(value) {
    if (typeof value !== 'number' ) {
        return Promise.reject(`Error, ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            });
        }, Math.random()*1000)
    })  
}
cuadradoPomise(0)
.then(obj => {
    console.log('Inicia Promise');
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPomise(1);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPomise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPomise('3');
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPomise(4);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPomise(5);
})
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log('Fin de la promesa');
})
.catch(error => console.log(error)); */
/* Imprime: 
Inicia Promise
Promise: 0, 0
Promise: 1, 1
Promise: 2, 4
Error, 3 no es un número */
/* 4) ------------------ Promesas ---------------------- */

/* 5) ----------------- Async Await -------------------- */

/* Esperan a que algo se cumpla para poder ejecutar 
el proceso.
Las funciones asíncronas trabajan en conjunto con las
promesas. 
Función asíncrona delarada, no arrow function. 
La Función asíncrona funciona con la palabra reservada
await porque espera el resultado antes de pasar a las
demás líneas de ejecución (209)*/

/* function cuadradoPomise(value) {
    if (typeof value !== 'number' ) {
        return Promise.reject(`Error, ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            });
        }, Math.random()*1000)
    })  
}
async function funcAsicrona() {
    try{
        console.log('Inicio Async function');
        let obj = await cuadradoPomise(0);
        console.log(`async function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPomise(2);
        console.log(`async function: ${obj.value}, ${obj.result}`)
    } catch(err) {
        
    }
}
funcAsicrona(); */
/* Imprime: 
Inicio Async function
async function: 0, 0
async function: 2, 4 */

/* Control de errores con el catch cuando no se pasa un
número */
/* function cuadradoPomise(value) {
    if (typeof value !== 'number' ) {
        return Promise.reject(`Error, ${value} no es un número`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            });
        }, Math.random()*1000)
    })  
}
async function funcAsicrona() {
    try{
        console.log('Inicio Async function');
        let obj = await cuadradoPomise(0);
        console.log(`async function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPomise('2');
        console.log(`async function: ${obj.value}, ${obj.result}`)
    } catch(err) {
        console.error(err)
    }
}
funcAsicrona(); */
/* Imprime:
Inicio Async function
async function: 0, 0
Error, 2 no es un número */
/* 5) ----------------- Async Await -------------------- */
