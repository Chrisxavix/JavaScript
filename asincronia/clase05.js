/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Temporizadores: Línea 
2) Asincronía y Event Loop: Linea 
3) Callbacks: Línea 
4) Promesas: Línea 
5) Async Await: Línea 
*/

/* 1) ---------------- Temporizadores ------------------ */

/* El setTimeout se ejecuta una sola vez, esto con el tiempo
estimado, que es de 3s (3000) */
/* console.log('inicio');
setTimeout(() => {
    console.log('ejecutando setTime');
},3000); */
/* Imprime1:
inicio
Imprime2: después de 3s
ejecutando setTime */

/* Borrar o detener el setTimeout, hay que darle 
una variable */
/* let temporizador = setTimeout(() => {
    console.log('ejecutando setTime');
},3000); 
console.log('borrando');
clearTimeout(temporizador); */
/* Imprime:
borrando */

/* El setInterval se ejecuta indefinidamente, 
esto con el tiempo estimado, que es de 3s (3000) */
/* console.log('inicio');
setInterval(() => {
    console.log('ejecutando setInterval');
},3000); */

/* Borrar o detener el setInterval, hay que darle 
una variable */
/* let temporizador = setInterval(() => {
    console.log('ejecutando setTime');
},3000); 
console.log('borrando');
clearInterval(temporizador); */
/* Imprime:
borrando */
/* 1) ---------------- Temporizadores ------------------ */

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
el proceso */

function cuadradoPomise(value) {
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
    } catch{

    }
}

/* 5) ----------------- Async Await -------------------- */



