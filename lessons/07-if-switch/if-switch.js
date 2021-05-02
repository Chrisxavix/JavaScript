/* ------------- Estructura If - Switch - Ternario------------- */

/* Bucle if, condición de sí y no */
console.log('--------- 1 ---------');
let edadPerson1 = 19;
if (edadPerson1 > 19) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
}

/* Bucle if con varias condiciones */
console.log('--------- 2 ---------');
let edadPerson2 = 28;
if (edadPerson2 <= 10) {
    console.log('Niño');
} else if (edadPerson2 === 18) {
    console.log('Adulto');
} else {
    console.log('Tercera edad');
}

/* Operador ternario */
/* Solo una línea de código: verdadero o falso */
console.log('--------- 3 ---------');
let edadPerson3 = 24;
let mayorEdad = (edadPerson3 >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mayorEdad);

/* Switch de opciones */
console.log('--------- 4 ---------');
let dia = 2;
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
}
/* ------------- Estructura If - Switch - Ternario------------- */