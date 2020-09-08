/* --------------------- CURSO JAVASCRIPT ------------------- */

/* ------------------Tipos de impresiones------------------- */
/* console: imprime en la consola (F12)
alert: notificación en el navegador
prompt: ventana de ingreso de valores 
document.write: imprime en la página*/
/* console.log('hola');
alert('hola');
prompt('Escriba su nombre'); 
document.write("Hola");*/
/* ------------------Tipos de impresiones------------------- */

/* --------------------- Strings ------------------------- */
/* let nombre = "Chris" */
/* 1) Al poner '+' para concatenar se elimina el espaciado, ejemplo de impresión: 
Hola Chris, su nombre tiene: 5 letras. */
/* 2) Propiedad length cuenta los caracteres de la cadena */
/* console.log('Hola ' + nombre + ', su nombre tiene: ' + nombre.length + ' letras.'); */

/* Al poner ',' para concatenar agrega el espaciado, ejemplo de impresión: 
Hola  Chris , su nombre tiene:  5  letras. */
/* console.log('Hola ', nombre, ', su nombre tiene: ' ,nombre.length, ' letras.'); */

/* Ingreso manualmente */
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res + '. Tiene '+ res.length + ' letras su nombre.'); */

/* Ingresa mayúsuculas y todo lo pone en minúsculas*/ 
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res.toLowerCase()); */
/* Ingresa: DANI
Imprime: dani */

/* Ingresa minúsculas y todo lo pone en mayúsuculas*/ 
/* let res = prompt("Escriba su nombre");
alert('Hola '+ res.toUpperCase()); */
/* Ingresa: dani
Imprime: DANI */

/* El includes verifica que exista el valor */
/* let res = 'lorem tres cuatro cinco'
alert('Hola '+ res.includes('cinco')); */
/* Imprime: Hola true */

/* trim, elimina los espacios de inicio y fin */
/* let res = ' lorem tres cuatro cinco '
console.log(res);
console.log(res.trim()); */
/* Imprime1:  lorem tres cuatro cinco
Imprime2:lorem tres cuatro cinco */

/* split. separa las cadenas a partir un espacio en un array */
/* let res = 'lorem tres cuatro cinco'
console.log(res.split(' ')); */
/* Imprime: ["lorem", "tres", "cuatro", "cinco"] /*

/* Impime la primera cadena despues del "." */
/* var str = "Dani Fhn. Filth"; 
var splitted = str.split('.')[1];
console.log(splitted); */
/* Imprime: Filth */

/* Separa la cadena después de un punto e imprime separadas en un array*/
/* var str = "Dani.Chris"; 
var splitted = str.split('.');
console.log(splitted); */
/* Imprime: ["Dani", "Chris"] */

/* Imprime la primera letra de la cadena y lo convierte a mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 1).toUpperCase()
console.log(splitted); */
/* Imprime: D */

/* Imprime la cuatro letras de la cadena y lo convierte a mayúscula */
/* let str = "dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0, 4).toUpperCase()
console.log(splitted);  */
/* Imprime: DANI */

/* Elimina la primera letra de la cadena */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(1);
console.log(splitted) ; */
/* Imprime: ani Fhn Filth asd, asddsf */

/* Imprime la cadena desde el 0 al 8 */
/* let str = "Dani Fhn Filth asd, asddsf"; 
let splitted = str.substring(0,8);
console.log(splitted); */
/* Imprime: Dani Fhn */

/* Interpolación o concatecación */
/* let nombre='Chris';
let edad=25;
console.log(`Hola ${nombre}, tienes ${edad} años.`); */

/* Manda notificación de ingreso del nombre, (maggot) está ingresado por defecto */
/* const nombre = prompt("Escribe tu nombre", "maggot");
document.write("Hola " + nombre); */
/* Imprime: Hola maggot */
/* --------------------- Strings ------------------------- */

/* --------------------------- Números -------------------------- */
/* Suma de dos valores con interpolación */
/* const a=5;
const b=10;
result=a+b;
console.log(`El resultado es ${result}, de la suma de ${a} + ${b}`); */
/* Imprime: El resultado es 15, de la suma de 5 + 10 */

/* Redondear decimales, el (1) define cuántos decimales */
/* c=7.19;
console.log(c.toFixed(1)); */
/* Imprime: 7.2 */

/* Me da el número entero */
/* c=7.19;
console.log(parseInt(c)); */
/* Imprime: 7 */

/* Suma de números, no toma la parte decimal */
/* c=7.19;
d='5.6'
console.log(c + parseInt(d)); */
/* Imprime: 12.190000000000001 */

/* Suma de números con la parte decimal */
/* c=7.19;
d='5.6'
console.log(c + parseFloat(d)); */
/* Imprime: 12.79 */

/* Suma de dos números con ingreso de datos con parseInt() */
/* const num1 = prompt("Escriba el primer número");
const num2 = prompt("Escriba el segundo número");
result = parseInt(num1)  + parseInt(num2);
document.write("Resultado: ", result); */
/* Imprime: Resultado 10 */
/* --------------------------- Números -------------------------- */

/* --------------------------- Arrays - Arreglos -------------------------- */

/* Declaración de un arreglo vacío 1 */
/* const e = new Array();
console.log(e); */
/* Imprime: [] */

/* Declaración de un arreglo vacío 2 */
/* const e = [];
console.log(e); */
/* Imprime: [] */

/* Declaración de un arreglo vacío con límite de 3*/
/* const d = Array(3)
console.log(d); */
/* Imprime: [empty × 3] */

/* Declaración e impresión de un array */
/* a = [1, true, [1, 2, 'tres'], 'Maggot', 10]
console.log(a);*/
/* Imprime: [1, true, Array(3), "Maggot", 10]  */

/* Declaración e impresión de una posición en el array */
/* a = [1, true, [1, 2, 'tres'], 'Maggot', 10]
console.log(a[2]); */
/* Imprime: [1, 2, "tres"] */

/* Declaración e impresión de una posición dentro de un array del array */
/* a = [1, true, [1, 2, 'tres'], 'Maggot', 10]
console.log(a[2][1]); */
/* Imprime: 2 */

/* Otra forma de declarar un Array */
/* const c = Array.of('D', 3, true);
console.log(c)
console.log(c.length) */
/* Imprime1: ["D", 3, true]
Imprime1: 3 */

/* Declara un array con límite y lo llena de false */
/* const d = Array(3).fill(false);
console.log(d); */
/* Imprime: [false, false, false] */

/* Agrega valores a un array con "push" */
/* const colores = ['rojo', 'verde', 'amarillo']
console.log(colores);
colores.push('verde')
console.log(colores); */
/* Imprime1: ["rojo", "verde", "amarillo"]
Imprime1: ["rojo", "verde", "amarillo", "verde"] */

/* Elimina el último valor en el array con "pop" */
/* const colores = ['rojo', 'verde', 'amarillo']
console.log(colores);
colores.pop('verde');
console.log(colores); */
/* Imprime1: ["rojo", "verde", "amarillo"]
Imprime2: ["rojo", "verde"] */

/* Recorrer el array y listar con html(li), uso de forEach */
/* const colores = ['rojo', 'verde', 'amarillo']
colores.forEach(function(el){
console.log(`<li>${el}</li>`)
}) */
/* Imprime:<li>rojo</li>
        <li>verde</li>
        <li>amarillo</li> */

/* Recorrer el array y listar con html(li), uso de forEach 
donde (el) es el elemento en el array e (index) es la 
posición */
/* const colores = ['rojo', 'verde', 'amarillo']
colores.forEach(function(el, index){
console.log(`<li id=${index}>${el}</li>`)
}) */
/* Imprime:<li id=0>rojo</li>
        <li id=1>verde</li>
        <li id=2>amarillo</li> */

/* Crea un nuevo arrary con (.map), en este caso lo multiplica x2 */
/* let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function(x) {
   return x * 2;
});
console.log(doubles); */
/* --------------------------- Arrays - Arreglos -------------------------- */

/* --------------------------- Objetos -------------------------- */

/* utilizar const para los objetos */

/* Declaración de objetos v1 */
/* const b = {};
console.log(b); */
/* Imprime: {} */

/* Declaración de objetos v2 */
/* const b = new Object();
console.log(b); */
/* Imprime: {} */

/* Declaración de objetos v3 */
/* const chris = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {tel: 1234, correo: 'lorem'}
}
console.log(chris); */
/* Imprime: nombre: "Chris"
        edad: 24
        correo: "chris@gmail.com"
        pasatiempos: Array(3)
                0: "jugar"
                1: "caminar"
                2: "leer"
        soltero: true
        contacto:
                correo: "lorem"
                tel: 1234 */

/* Acceder a los datos en un objeto con paréntesis */
/* const chris = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {tel: 1234, correo: 'lorem'}
}
console.log(chris['nombre']);
console.log(chris['contacto']);
console.log(chris['contacto']['correo']); */
/* Imprime1: Chris
Imprime2: {tel: 1234, correo: "lorem"}
Imprime3: lorem */

/* Acceder a los datos en un objeto con paréntesis */
/* const chris = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {tel: 1234, correo: 'lorem'},
    saludar: function() {
        console.log('Hola');
    }
}
console.log(chris.nombre);
console.log(chris.contacto);
console.log(chris.contacto.correo);
chris.saludar(); */
/* Imprime1: Chris
Imprime2: {tel: 1234, correo: "lorem"}
Imprime3: lorem
Imprime4: Hola */

/* EL (.keys) me da los ids del objeto
El (.values) me da los valores de las ids
El (.hasOwnProperty) pregunta si exite el id 'nombre' */
/* const chris = {
    nombre: 'Chris',
    edad: 24,
    correo: 'chris@gmail.com',
    pasatiempos: ['jugar', 'caminar', 'leer'],
    soltero: true,
    contacto: {tel: 1234, correo: 'lorem'},
    saludar: function() {
        console.log('Hola');
    }
}
console.log(Object.keys(chris));
console.log(Object.values(chris));
console.log(chris.hasOwnProperty('nombre')); */
/* Imprime1: 0: "nombre"
1: "edad"
2: "correo"
3: "pasatiempos"
4: "soltero"
5: "contacto"
6: "saludar"

Impime2: 0: "Chris"
1: 24
2: "chris@gmail.com"
3: (3) ["jugar", "caminar", "leer"]
4: true
5: {tel: 1234, correo: "lorem"}
6: ƒ ()
Imprime3: true */
/* --------------------------- Objetos -------------------------- */

/* --------------------------- Operadores -------------------------- */

/* Dos igulaes (==) se comparan los valores
Tres iguales (===) se comparan los tipos de datos y valor */
/* console.log('7'==7);
console.log('7'===7);
console.log(7===7); */
/* Imprime1: true
Imprime2: false 
Imprime3: true */

/* Operador (+=), incrementa  */
/* Es como tener (i = i + 2;) igual a (i += 2;) */
/* let i = 1;
i += 2;
console.log(i); */
/* Imprime: 3 */

/* O realizar cualquier operación (*=) */
/* let i = 1;
i *= 2;
console.log(i); */
/* Imprime: 2 */

/* Incremento binario */
/* let i = 1;
i ++;
console.log(i); */
/* Imprime: 2 */

/* Incremento binario */
/* let i = 1;
++i;
console.log(i); */
/* Imprime: 2 */

/* Operador (!), que denota negación */
/* let c= true;
console.log(!c); */
/* Imprime: false */

/* ------------------ Estructuras de Control -------------- */
/* Bucle if */
/* let edad = 19;
if (edad>19) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
} */
/* Imprime: Mayor de edad */

/* Bucle if con varias condiciones*/
/* let edad = 28;
if (edad<=10) {
    console.log('Niño');
} else if (edad===18) {
    console.log('Adulto');
} else {
    console.log('Tercera edad');
} */
/* Imprime: Tercera edad */

/* Operador ternario
Solo una línea de código: verdadero o falso */
/* edad=24;
let mayor = (edad>=18) 
? 'Eres mayor de edad':
'Eres menor de edad';
console.log(mayor); */
/* Imprime: Eres mayor de edad */

/* Switch de opciones */
/* let dia=2;
switch (dia) {
case 1:
    console.log('Lunes');
    break;
case 2:
    console.log('Martes');
    break;
default: 
    console.log('No hay día');   
    break;
} */
/* Imprime: Martes */
/* ------------------ Estructuras de Control -------------- */