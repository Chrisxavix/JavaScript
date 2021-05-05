/* --------------------- CURSO JAVASCRIPT ------------------- */
/*
2) Herencia: Linea 67
3) Clases y Herencia: Línea 110
4) Métodos estáticos, getters y setters: Línea 283
*/

/* 2) ----------------- Herencia ------------------------ */

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
/* ------------------- Herencia ------------------------- */

/* 3) ------------ Clases y Herencia -------------------- */

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
/* Imprime1:
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
/* -------------- Clases y Herencia ---------------------- */

/* 4) ------ Métodos estáticos, getters y setters -------- */

/* Métodos estáticos
Es aquel que se puede ejecutar sin la necesidad de 
instanciar la clase. El método (queEres()) */

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

/* Getters y setters
Los setters y getters son métodos especiales que nos
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
/* -------- Métodos estáticos, getters y setters --------- */
