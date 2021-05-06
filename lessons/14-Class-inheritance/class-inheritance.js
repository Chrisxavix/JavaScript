/* ------------ Clases y Herencia -------------------- */

/* Azucar sintático con clases */
/* A pesar de usar clases, JavaScript lo tomará como funciones contructoras en la ejecución. */
/* ------------ Clase ------------ */
console.log('--------- 1 ---------');
class Animal {
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
console.log(scooby);

/* ------------ Herencia ------------ */
/* La clase perroV1 hereda desde la clase padre Animal con la palabra extends */
console.log('--------- 2 ---------');
class AnimalV1 {
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
class PerroV1 extends AnimalV1 {
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
const mimiV1 = new AnimalV1('Mimi', 'Hembra');
const scoobyV1 = new PerroV1('Scooby', 'Macho', 'Cazador');
console.log(mimiV1);
mimiV1.sonar();
mimiV1.saludar();
// scoobyV1 al ser declarado como PerroV1 y que esta clase hija hereda de AnimalV1 puede acceder a los métodos, como es el caso con el método de saludar()
console.log(scoobyV1);
scoobyV1.sonar();
scoobyV1.saludar();
scoobyV1.ladrar();

/* Ejercicio de clases y herencia, 1*/
console.log('--------- 3 ---------');
class Datos {
    constructor (num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
}
class Suma extends Datos {
    // Constructor agrega más parámetros en caso de necesitar
    constructor (num1, num2, respuesta) {
        super(num1, num2)
        this.respuesta = respuesta;
    }
    operar () {
        this.respuesta = this.num1 + this.num2;
        console.log(`${this.num1} + ${this.num2} = ${this.respuesta}`)
    }
} 
const suma = new Suma(80,20)
suma.operar()

/* Ejercicio de clases y herencia, 2*/
console.log('--------- 4 ---------');
class DatosV1 {
    constructor (num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
}
class Operaciones extends DatosV1 {
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
const sumaV1 = new Operaciones(10,20,"+")
const restaV1 = new Operaciones(30,20,"-")
const multiV1 = new Operaciones(8,2,"*")
const divV1 = new Operaciones(10,2,"/")
sumaV1.operar()
restaV1.operar()
multiV1.operar()
divV1.operar()
/* -------------- Clases y Herencia ---------------------- */