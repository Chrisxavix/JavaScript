/* --------------------- CURSO JAVASCRIPT ------------------- */
/*
4) Métodos estáticos, getters y setters: Línea 283
*/

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
