/* --------------------- CURSO JAVASCRIPT ------------------- */
/* 
1) Symbol: Línea 
2) Set: Linea 
3) Maps: Línea 
4) Iterables & Iterators: Línea 
5) Objetos dinámicos: Línea
6) This
*/

/* 1) ------------------ Symbol -------------------- */
/* Symbol es un tipo de dato primitivo como (number, 
string,etc).
Permiten crear identificadores de referencia únicos */

/* Ejemplo de ids que son iguales */
/* let id = 'hola';
let id2 = 'hola';
console.log(id===id2) */
/* Imprime:
true */

/* Ejemplo de ids que son diferentes con symbol*/
/* let id = Symbol('hola');
let id2 = Symbol('hola');
console.log(id===id2)
console.log(id) */
/* Imprime1:
false
Imprime2:
Symbol(hola) */
/* 1) ------------------ Symbol -------------------- */

/* 2) ------------------- Set --------------------- */
/* Set es un arreglo que acepta valores primitivos para
eliminar elementos duplicados */

/* let set = new Set([1,2,3,3,false,'hola', 'HOLA', true, false]);
console.log(set); */
/* Imprime: elimina repetidos
0: 1
1: 2
2: 3
3: false
4: "hola"
5: "HOLA"
6: true */
/* 2) ------------------- Set --------------------- */

/* 3) ------------------- Maps --------------------- */
/* Sirve para almacenar valores a manera de objeto */
/* let mapa = new Map();

mapa.set('nombre', 'chris');
mapa.set('edad', 24);

console.log(mapa); 
console.log(mapa.size);
console.log(mapa.get('edad')); */
/* 3) ------------------- Maps --------------------- */

/* 4) ----------- Iterables & Iterators ------------- */
/* const iterable = [1,2,3,4,5] 
// Accedesmos al iterador de la variable iterable 
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */
/* 4) ----------- Iterables & Iterators ------------- */

/* 5) -------------- Objetos dinámicos ---------------- */
/* Objetos dinámicos */
/* const objUsers = {};
const users = ['Dani', 'Maggot', 'Lucky', 'Dans'];
users.forEach((user, i) => objUsers[`id: ${i}`] = user);
console.log(objUsers);
console.log(users); */
/* Imprime1:
{id: 0: "Dani", id: 1: "Maggot", id: 2: "Lucky", id: 3: "Dans"}
Imprime2:
(4) ["Dani", "Maggot", "Lucky", "Dans"] */
/* 5) -------------- Objetos dinámicos ---------------- */

/* 6) ------------------- This ----------------------- */
/* this es una referencia al objeto en el que se está
trabajando, poder invovar propiedades o métodos */

/* console.log(this, 'this');
console.log(window, 'window');
console.log(this === window); */
/* Imprime1:
Window {parent: Window, opener: null, top: Window, 
length: 0, frames: Window, …} "this"
Imprime2:
Window {parent: Window, opener: null, top: Window, 
length: 0, frames: Window, …} "window"
Imprime3:
true */

/* this.name = 'Global'
function imprimir() {
    console.log(this.name);
}
imprimir(); */
/* Imprimir:
Global */

/* const obj = {
    name: 'Objeto',
    imprimir: function(){
        console.log(this.name)
    }
}
obj.imprimir(); */
/* Imprimir:
Objeto */

/* const obj2 = {
    name: 'Objeto 2',
    imprimir
}
obj2.imprimir(); */
/* Imprimir:s
Objeto 2 */

/* Las arrow function saltan el contexto en 
donde están  */
/* const obj3 = {
    name: 'Objeto 3',
    imprimir: () =>{
        console.log(name)
    }
}
obj3.imprimir(); */
/* Imprimir:
Global */
/* 6) ------------------- This ----------------------- */

/* 7) -------------- Call, apply, bin----------------- */


/* 7) -------------- Call, apply, bin----------------- */