/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Temporizadores: Línea 
2) Asincronía y Event Loop: Linea 
3) Callbacks: Línea 
4) Promesas: Línea 
5) Expresiones regulares: Línea 
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










/* 4) ------------------ Promesas ---------------------- */

