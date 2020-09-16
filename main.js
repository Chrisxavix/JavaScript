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

/* Recorrer el array y listar con html(li), uso de forEach 
Itera como un ciclo For */
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

/* La función se va a ejecutar por cada elemento del arreglo,
lo cual se declara con una variable (element) */
/* const colores = ['rojo', 'verde', 'amarillo'];
colores.forEach(function (element) {
    console.log(element);
}); */
/* Imprime: 
rojo
verde
amarillo */

/* A cada valor con el recorrido forEach se le multiplica *3 */
/* const colores = [2, 4, 9];
colores.forEach(function (element, ) {
    console.log(element *3);
}); */
/* Imprime:
6
12
27 */
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
/* Imprime1: 
0: "nombre"
1: "edad"
2: "correo"
3: "pasatiempos"
4: "soltero"
5: "contacto"
6: "saludar"
Impime2: 
0: "Chris"
1: 24
2: "chris@gmail.com"
3: (3) ["jugar", "caminar", "leer"]
4: true
5: {tel: 1234, correo: "lorem"}
6: ƒ ()
Imprime3: true */
/* --------------------------- Objetos -------------------------- */

/* --------------------------- Operadores -------------------------- */

/* Dos iguales (==) se comparan los valores
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
/* --------------------------- Operadores -------------------------- */

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

/* ------------------ Estructura while, for ------------------ */
/* Estructura while, se repite mientras se cumpla la
condición */
/* let cont =0; 
while (cont < 10) {
    cont=cont + 1;
    console.log(cont);
}
 */

/* Estructura del bucle for
for(inicializar variable; condición, incremento) {
    sentencias de código;
} */

/* Imprimir números con el bucle for */
/* for (let i = 0; i<10; i++){
    console.log('for', i)
} */
/* Imprime:
for 0
for 1
for 2
for 3
for 4
for 5
for 6
for 7
for 8
for 9 */

/* Imprime el array */
/* let numeros = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i<numeros.length; i++){
    console.log('for', numeros[i])
} */
/* Imprime:
for 10
for 20
for 30
for 40
for 50
for 60
for 70 */

/* En un objeto con el (for in) entramos al objeto */ 
/* const chris = {nombre: 'chris', apellido: 'Chillo',
edad: 24}
for(const propiedad in chris) {
    console.log(propiedad);
} */
/* Imprime:
nombre
apellido
edad */
 
/* En un objeto con el (for in) recorremos propiedades de un
objeto, buscamos el valor a imprimir */ 
/* const chris = {nombre: 'chris', apellido: 'Chillo',
edad: 24}
for(const propiedad in chris) {
    console.log(`Id: ${propiedad} Validado: ${chris[propiedad]}`);
} */
/* Imprime:
Id: nombre Validado: chris
Id: apellido Validado: Chillo
Id: edad Validado: 24 */
 
/* Permite recorrer todos los elementos de cualquier objeto
que se iterable con el (of) */
/* let numeros = [10, 20, 30, 40, 50, 60, 70];
for (const elemento of numeros) {
    console.log(elemento);
} */
/* Imprime:
10
20
30
40
50
60
70 */

/* Ejemplo 2 con el for of */
/* let caracter = 'Dani Filth';
for (const cart of caracter) {
    console.log(cart);
} */
/* Imprime:
D
a
n
i
  
F
i
l
t
h */

/* NOTA: 
For In: recorrer propiedades de un objeto
For Of: recorrer elementos de un objeto iterable, que pueda 
darle posición, como un arreglo  */
/* ------------------ Estructura while, for ------------------ */

/* ------- CONTROL DE ERRORES -------------------- */

/* El try contiene el código que será evaluado
El catch contiene los errores que daría la consola, 
al imprimir el error muestra como lo haría la consola
del navegador.
El finally siempre se ejecuta, haya o no errores. */
/* try {
    console.log('Se agrega el código a evaluar');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
} */
/* Imprime:  
Se agrega el código a evaluar
Se ejecuta siempre al final de un bloque try-catch */

/* Agregar un error con (NaNN) ya que no está definida, por lo
que encuentra el error y no continuá, por eso no imprime
el "console.log('Segundo mensaje');" */
/* try {
    console.log('Se agrega el código a evaluar');
    NaNN;
    console.log('Segundo mensaje');
} catch (error) {
    console.log('Captura cualquier error lanzado en el try');
    console.log(error);
} finally {
    console.log('Se ejecuta siempre al final de un bloque try-catch');
} */
/* Imprime:  
Se agrega el código a evaluar
Captura cualquier error lanzado en el try
ReferenceError: NaNN is not defined at main.js:439
Se ejecuta siempre al final de un bloque try-catch */

/* Declarar un error con el tipo de dato, usando (isNaN)
para conocer si es un número.
console.trace(), indica la línea de error.*/
/* try {
    let numero = 'lo';
    if (isNaN(numero)) {
        throw new Error('El caracter no es un número.')
    }
    console.log(numero * numero);
} catch (error) {
   console.trace(`Se produjo el error ${error}`);
}  */
/* Imprime: 
Se produjo el error Error: El caracter no es un número.
(anonymous)	@	main.js:463 
O sea, la línea 463 tiene el error. */
/* ------- CONTROL DE ERRORES -------------------- */

/* --------------------Palabras Reservadas ----------------- */

/* El break detiene el bucle cuando la condición se cumple */
/* const numeros = [1, 2, 3, 4, 5, 6, 7];
for (i=0; i<numeros.length; i++) {
    if(i===3) {
        break;
    }
    console.log(numeros[i]);
} */
/* Imprime: 
1
2
3 */

/* El continue elimina la posición y continua con el bucle
normalmente */
/* const numeros = [1, 2, 3, 4, 5, 6, 7];
for (i=0; i<numeros.length; i++) {
    if(i===3) {
        continue;
    }
    console.log(numeros[i]);
} */
/* Imprime:
1
2
3
5
6
7 */

/* Ejercicio de valores que sean divisibles para 2 con el
módulo, ejemplo: 34%2=0, por lo que se imprime, cosa
distinta sucede con: 63%2=1, por lo que elimina y continua */
/* let nums = [1, 2, 63, 34, 56, 345, 76, 2, 67, 22];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
        continue;
    }
    console.log(nums[i]);
} */
/* Imprime: 
2
34
56
76
2
22 */
/* --------------------Palabras Reservadas ----------------- */

/* -------------------- Destructuración --------------------- */

/* Tomar el valor de cada posición del array
sin destructuración */
/* const numeros = [78, 27, 3];
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];
console.log(a);
console.log(b);
console.log(c); */
/* Imprime:
78
27
3 */

/* Con destructuración es ahorrar líneas de código
y darles valor a la posición del arreglo */
/* const numeros = [78, 27, 3];
const[a, b, c] = numeros;
console.log(a);
console.log(b);
console.log(c); */
/* Imprime:
78
27
3 */

/* Tomar el valor de cada posición del objeto
sin destructuración */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
const a1 = chris.id;
const a2 = chris.name;
const a3 = chris.apellido;
console.log(a1);
console.log(a2);
console.log(a3); */
/* Imprime:
1
Chris
Chillogalli */

/* Con destructuración es ahorrar líneas de código
y darles valor a la posición del objeto, no importa el orden
en el que se declare */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
let {name, apellido, id} = chris;
console.log(id);
console.log(name);
console.log(apellido); */
/* Imprime:
1
Chris
Chillogalli */

/* Cambiar el valor de un objeto */
/* const chris = {id: 1, name: 'Chris', apellido: 'Chillogalli'};
chris.id = '2'
chris.name = 'Dani'
chris.apellido = 'Filth'
console.log(chris.id);
console.log(chris.name);
console.log(chris.apellido); */
/* Imprime:
2
Dani
Filth */
/* -------------------- Destructuración --------------------- */

/* ------------ Parámetros Rest & Operador Spread (propagar) ----------- */

/* Parámetro Rest, los puntos (...), permite agregar
valores no definidos, son parámetros que recibe una
función */
/* function sum(a,b, ...valorNuevo) {
    let result = a+b;

    valorNuevo.forEach(function (n) {
        result += n;
    })
    return result;
}
let b = sum(8,4,9,10);
console.log('La respuesta es:', b) */
/* Imprime: 
La respuesta es: 31 */

/* Operador Spread, al agregar los puntos (...), une los dos arreglos y
les da posición a cada valor */
/* const Arreglo1 = [1,2,3,4,5];
const Arreglo2 = [11,12,13,14,15];
const Arreglo3 = [...Arreglo1, ...Arreglo2]
console.log(Arreglo1);
console.log(Arreglo2);
console.log(Arreglo3); */
/* Imprime: 
(5) [1, 2, 3, 4, 5]
(5) [11, 12, 13, 14, 15]
(10) [1, 2, 3, 4, 5, 11, 12, 13, 14, 15] */

/* El mismo ejemplo, pero con objetos */
/* const Objeto1 = {id: 1, name: 'Chris'};
const Objeto2 = {lastname: 'Chillogalli'};
const Objeto3 = {...Objeto1, ...Objeto2};
console.log(Objeto1);
console.log(Objeto2);
console.log(Objeto3); */
/* Imprime:
{id: 1, name: "Chris"}
{lastname: "Chillogalli"}
{id: 1, name: "Chris", lastname: "Chillogalli"} */

/* ------------ Parámetros Rest & Operador Spread ----------- */

/* -------------------- Arrow Functions ----------------------- */

/* Definir funciones anónimas expresadas, */

/* 1) Cuando es una sola sentencia es opcional las llaves 
2) Es obligado el paréntesis */
/* saludar = () => console.log('Hola');
saludar(); */
/* Imprime: 
Hola  */

/* (nombre) sería el parámetro, es opcional enviarlo
entre paréntesis solo cuando es un parámetro */
/* saludar = nombre => console.log('Hola', nombre);
saludar('Chris'); */
/* Imprime: 
Hola Chris */

/* Ejemplo de uso normal con funciones */
/* sumar = function(a,b) {
    return a+b;
}
result = sumar(4,5);
console.log(result); */
/* Imprime: 
9 */

/* Ejemplo de uso normal con funciones usando 
las arrow.
Es obligado usar paréntesis para los parámetros.
La flecha indica el return. */
/* sumar = (a,b) => a+b;
result = sumar(9,5);
console.log(result); */
/* Imprime: 
14 */

/* Usando (.forEach) para iterar el array, se puede evadir 
"function" por "=>" */
/* Ejemplo con "function" */
/* const numeros = [1,5,8,7];
numeros.forEach(function (element) {
    console.log(element)
}) */
/* Imprime: 
1
5
8
7 */

/* Evadiendo "function" por "=>" */
/* const numeros = [1,5,8,7];
numeros.forEach((element) => {
    console.log(element)
}) */
/* Imprime: 
1
5
8
7 */

/* Contexto de objeto con una función normal */
/* const perro = {
    id: 9,
    name: 'Dans',
    ladrar() {
        console.log(this);
    }
}
perro.ladrar(); */
/* Imprime: 
{id: 9, name: "Dans", ladrar: ƒ} */

/* Contexto de Window con una función con arrow */
/* const perro = {
    id: 9,
    name: 'Dans',
    ladrar:() => {
        console.log(this);
    }
}
perro.ladrar(); */
/* Imprime: 
Window {parent: Window, opener: null, 
top: Window, length: 0, frames: Window, …} */

/* -------------------- Arrow Functions ----------------------- */

/* ----------------------- Prototipos ----------------------- */
/* P.O.O: Programación orientada a objetos
1) Clases: Modelo a seguir
2) Objetos: Una instancia de una clase
    Atributos: Característica del objeto, variables
    Metodos: Acciones que un objeto realiza, funciones */

/* Funcion constructora=Javascript lo toma como clase, 
poder ocupar variables y métodos sin tener que copiar y 
pegar código para cada objeto */
/* function Animal (nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    // Método
    this.sonar = function () {
        console.log('Hacer sonido del animal');
    }
}
// "new" crea una Instancia del tipo que se le asigne
const snoop = new Animal('Mal', 'Macho');
const snoopy = new Animal('Dana', 'Hembra');
console.log(snoop);
console.log(snoopy); */
/* Imprime:
Animal {nombre: "Mal", genero: "Macho", sonar: ƒ}
Animal {nombre: "Dana", genero: "Hembra", sonar: ƒ} */

/* Funcion constructora, cada que genero una instancia
lleva el método "this.sonar" y "this.saludar", lo cual 
ocuparía memoria, por lo que se puede dejarlo fuera */
/* function Animal (nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}
// Métodos
Animal.prototype.sonar = function () {
    console.log('Hacer sonido del animal');
}
Animal.prototype.saludar = function () {
    console.log('Hola, me llamo', this.nombre);
}
// "new" crea una Instancia del tipo que se le asigne
const snoop = new Animal('Mal', 'Macho');
const snoopy = new Animal('Dana', 'Hembra');
console.log(snoop);
console.log(snoopy);
snoopy.sonar();
snoopy.saludar(); */
/* Imprime:
Animal {nombre: "Mal", genero: "Macho"}
Animal {nombre: "Dana", genero: "Hembra"}
Hacer sonido del animal
Hola, me llamo Dana */
/* ----------------------- Prototipos ----------------------- */

/* ---------------------- Herencia ------------------------------ */

/* Heredar características de un padre al hijo 
El "super" manda a llamar el contructor del padre */

/* function Animal (nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}
// Métodos
Animal.prototype.sonar = function () {
    console.log('Hacer sonido del animal');
}
Animal.prototype.saludar = function () {
    console.log('Hola, me llamo', this.nombre);
}
function Perro (nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero)
    this.tamanio = tamanio;
}
// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// Sobreescritura del método del prototipo padre en el hijo
Perro.prototype.sonar = function () {
    console.log('Perross');
}
Perro.prototype.ladrar = function() {
    console.log('guuuuuua');
}
const snoop = new Perro('Mal', 'Macho', 'Mediano');
const snoopy = new Animal('Dana', 'Hembra');
console.log(snoop); */
/* Imprime: 
genero: "Macho"
nombre: "Mal"
super: ƒ Animal(nombre, genero)
tamanio: "Mediano"
__proto__: Animal */
/* ---------------------- Herencia ------------------------------ */

/* ------------------------ Clases y Herencia ----------------------------- */

/* Desde el 2015 se puede usar clases, el azucar sintático.
A pesar de usar clases, JavaScript lo tomará como funciones
contructoras en la ejecución. */
/* ------------ Clase ------------ */
/* class Animal {
    constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;   
    }
    // Métodos
    sonar() {
        console.log('Hacer sonido del animal');
    }
    saludar() {
        console.log('Hola, me llamo', this.nombre);
    }
}
const mimi = new Animal('Mimi', 'Hembra');
const scooby = new Animal('Scooby', 'Macho');
mimi.sonar();
mimi.saludar();
console.log(mimi);
console.log(scooby); */
/* Imprime:1
genero: "Hembra"
nombre: "Mimi"
__proto__:
constructor: class Animal
saludar: ƒ saludar()
sonar: ƒ sonar()
__proto__: Object
Imprime2:  
genero: "Macho"
nombre: "Scooby"
__proto__:
constructor: class Animal
saludar: ƒ saludar()
sonar: ƒ sonar()
__proto__: Object 
Imprime3: 
Hacer sonido del animal
Imprime4:
Hola, me llamo Mimi */

/* ------------ Herencia ------------ */
/* class Animal {
    constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;   
    }
    // Métodos
    sonar() {
        console.log('Hacer sonido del animal');
    }
    saludar() {
        console.log('Hola, me llamo', this.nombre);
    }
}
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
// Super manda a llamar al constructor de la clase Padre (Animal)
        super (nombre, genero);
// Atributo
    this.tamanio = tamanio;
    }
    sonar(){
        console.log('Soy un perro');
    }
    ladrar(){
        console.log('guuuuuuuuuuuao');
    }
}
const mimi = new Animal('Mimi', 'Hembra');
const scooby = new Perro('Scooby', 'Macho', 'Cazador');
console.log(mimi);
mimi.sonar();
mimi.saludar();
console.log(scooby);
scooby.sonar();
scooby.saludar();
scooby.ladrar(); */
/* Imprimir1: 
Animal {nombre: "Mimi", genero: "Hembra"}
genero: "Hembra"
nombre: "Mimi"
__proto__: 
Imprimir2:
Hacer sonido del animal
Imprimir3:
Hola, me llamo Mimi
Imprimir4:
Perro {nombre: "Scooby", genero: "Macho", tamanio: "Cazador"}
genero: "Macho"
nombre: "Scooby"
tamanio: "Cazador"
__proto__: Animal 
Imprimir5:
Soy un perro 
Imprimir6:
Hola, me llamo Scooby 
Imprimir7:
guuuuuuuuuuuao */

/* Ejercicio de clases y herencia, 1*/
/* class Datos {
    constructor (num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
}
class Suma extends Datos {
    constructor (num1, num2, respuesta) { // Constructor agrega más parámetros en caso de necesitar
        super(num1, num2)
        this.respuesta = respuesta;
    }
    operar () {
        this.respuesta = this.num1 + this.num2;
        console.log(`${this.num1} + ${this.num2} = ${this.respuesta}`)
    }
} 
const suma = new Suma(80,20)
suma.operar() */
/* Imprime: 
80 + 20 = 100 */

/* Ejercicio de clases y herencia, 2*/
/* class Datos {
    constructor (num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
}
class Operaciones extends Datos {
    constructor (num1, num2, operador) {
        super(num1, num2);
        this.operador = operador;
    }
    operar () {
        let respuesta;
        if(this.operador === "+") {
            respuesta = this.num1 + this.num2;
            console.log(`${this.num1} ${this.operador} ${this.num2} = ${respuesta}`)
        } else if(this.operador === "-"){
            respuesta = this.num1 - this.num2;
            console.log(`${this.num1} ${this.operador} ${this.num2} = ${respuesta}`)
        } else if(this.operador === "*"){
            respuesta = this.num1 * this.num2;
            console.log(`${this.num1} ${this.operador} ${this.num2} = ${respuesta}`)
        } else if(this.operador === "/"){
            let respuesta = this.num1 / this.num2;
            console.log(`${this.num1} ${this.operador} ${this.num2} = ${respuesta}`)
        }
    }
} 
const suma = new Operaciones(10,20,"+")
const resta = new Operaciones(30,20,"-")
const multi = new Operaciones(8,2,"*")
const div = new Operaciones(10,2,"/")
suma.operar()
resta.operar()
multi.operar()
div.operar() */
/* Imprime:
10 + 20 = 30
30 - 20 = 10
8 * 2 = 16
10 / 2 = 5 */
/* ------------------------ Clases y Herencia ----------------------------- */

/* -------- Métodos estáticos, getters y setters -------------- */

/* ----------- Métodos estáticos */
/* Un método estático estático es aquel que se puede ejecutar sin la
necesidad de instanciar la clase. El método (queEres()) */

/* class Animal {
    constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;   
    }
    // Métodos
    sonar() {
        console.log('Hacer sonido del animal');
    }
    static saludar() {
        console.log('Hola, me llamo', this.nombre);
    }
}
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
// Super manda a llamar al constructor de la clase Padre (Animal)
        super (nombre, genero);
// Atributo
    this.tamanio = tamanio;
    }
    sonar(){
        console.log('Soy un perro');
    }
    ladrar(){
        console.log('guuuuuuuuuuuao');
    }
    static queEres(){
        console.log('Es un animal Perro');
    }
}
// Sin crear un objeto puedo invocar el método estático 
Perro.queEres(); */
/* Imprime: 
Es un animal Perro*/

/* ------------- Getters y setters */
/* Los setters y getters son métodos especiales que nos
permiten establecer y obtener los valores de atributos
nuestra clase */

/* class Animal {
    constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;   
    }
    // Métodos
    sonar() {
        console.log('Hacer sonido del animal');
    }
    static saludar() {
        console.log('Hola, me llamo', this.nombre);
    }
}
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
// Super manda a llamar al constructor de la clase Padre (Animal)
        super (nombre, genero);
// Atributo
    this.tamanio = tamanio;
// Al crear la nueva variable raza, no lo defino como
// parámetro del constructor, por eso lo mando en null
    this.raza = null;
    }
    sonar(){
        console.log('Soy un perro');
    }
    ladrar(){
        console.log('guuuuuuuuuuuao');
    }
    static queEres(){
        console.log('Es un animal Perro');
    }
// Método especial para obtener el valor
    get getraza(){
        return this.raza;
        
    }

    set setraza(raza){
        this.raza = raza;
    }
}
const scooby = new Perro('Scooby', 'Macho', 'Cazador');
console.log(scooby.getraza);
scooby.setraza = 'Demons';
console.log(scooby.getraza); */
/* Imprime:  
null
Demons */

/* El guion bajo en el id (this._name) se coloca por ser
privada */
/* class Persona {
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

const person = new Persona();
person.name = 'Chris';
console.log(person.name); */
/* Imprime: 
Chris */
/* -------- Métodos estáticos, getters y setters -------------- */


/* ------------------ Objeto console ------------------------- */

/* console.error('Esto es un error'); */
/* Imprime: (color rojo)
Esto es un error */

/* console.warn('Esto es un aviso'); */
/* Imprime: (color amarillo)
Esto es un aviso */

/* console.log('Esto es un registro de lo que pasa'); */
/* Imprime: (color amarillo)
Esto es un registro de lo que pasa */

/* console.clear(); */
/* Imprime:
Console was cleared */


/* ------------------ Objeto console ------------------------- */

