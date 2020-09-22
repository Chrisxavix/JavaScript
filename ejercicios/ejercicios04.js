/* -------- Ejercicios JavaScript ---------- */

/* 12) Programa una función que determine si un número es 
primo (aquel que solo es divisible por sí mismo y 1) o 
no, pe. miFuncion(7) devolverá true.

13) Programa una función que determine si un número es 
par o impar, pe. miFuncion(29) devolverá Impar.

14) Programa una función para convertir grados Celsius a 
Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. 

14.1) Fibonacci*/

/* ----------------- DESARROLLO -------------------- */

/* 12) ------------------------------------------------- */
/* Los números primos son solo divisibles para así mismos y 
para la unidad */
/* const entrada = () => {
    let numero = prompt('Ingrese el valor');
    numero = parseInt(numero);
    if (numero<1) return alert('Solo números mayores a 1.');
    if (!numero) return alert('No ingresó el número o no es un número.');
    for (let i=2; i<numero; i++) {
        if ((numero%i) === 0){
            return alert (`El número ${numero}, no es primo.`)
        }
    }
    alert(`El número ${numero}, si es primo.`)
}
entrada(); */
/* 12) ------------------------------------------------- */

/* 13) ------------------------------------------------- */
/* const entrada = () => {
    let numero = parseInt(prompt('Ingrese el valor'));
    if (numero<1) return alert('Solo números mayores a 1.');
    if (!numero) return alert('No ingresó el número o no es un número.');
    if ((numero%2)===0) {
        alert (`El número ${numero}, es par.`);
    } else {
        alert (`El número ${numero}, es impar.`);
    }
}
entrada(); */
/* 13) ------------------------------------------------- */

/* 14) ------------------------------------------------- */
const entrada = () => {
    let grados = parseInt(prompt('Ingrese los grados'));
    let unidad = prompt('Ingrese la unidad');
    if (grados<0) return alert('Solo números mayores a 0.');
    if (!grados) return alert('No ingresó los grados.');
    if (!unidad) return alert('No ingresó la unidad.');
    if (unidad.length!==1) return alert('Solo ingrese una valor en la unidad.');
    if (unidad !== 'C' && unidad !== 'F') return alert('Se espera una (F) o (C).');
   /*  if (unidad!=='F') return alert('No se espera ese valor.'); */

   
}
entrada();








/* 14) ------------------------------------------------- */

/* 14.1 ------------------------------------------------ */
/* const entrada = () => {
    let final = parseInt(prompt('Ingrese el número'));
    if (final<=0) return alert('Valores mayores a 0'); 
    if (isNaN(final)) return alert('No es un número');
    if (!final) return alert('No ingresó el numero.');
    final=final-2;
    let num1=1;
    let num2=1;
    const array=[num1, num2];
    for (let i=1; i<=final; i++){
        let nuevo_num= num1+num2;
        array.push(nuevo_num);
        num1= num2;
        num2=nuevo_num;
    }
    for (let x of array){
        console.log(x)
    }
}
entrada(); */
/* 14.1) ----------------------------------------------- */
