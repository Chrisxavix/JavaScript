/* https://github.com/nicksiuxs/CursoJavaScript/tree/master/Ejercicios */

/* 9) Programa una función que obtenga un numero aleatorio 
entre 501 y 600.

10) Programa una función que reciba un número y evalúe 
si es capicúa o no (que se lee igual en un sentido que 
en otro), pe. miFuncion(2002) devolverá true.

11) Programa una función que calcule el factorial de un 
número (El factorial de un entero positivo n, se define 
como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

/* ----------------- DESARROLLO -------------------- */

/* 9) --------------------------------------------------- */
/* const entrada = () => {
    let inicia = prompt('Ingrese el valor inicial');
    inicia = parseInt(inicia);
    let final = prompt('Ingrese el valor final');
    final = parseInt(final);
    let ramdon=Math.round(Math.random()*(final-inicia)+inicia);
    console.log(ramdon);
}
entrada(); */
/* 9) --------------------------------------------------- */

/* 10) -------------------------------------------------- */
/* const entrada = () => {
    let numero = prompt('Ingrese el número');
    numero = parseFloat(numero);
    if (!numero) return alert('No ingresó el numero.');
    if (isNaN(numero)) return alert('No es un número');
    let numero2 = numero.toString();
    let alReves = numero2.split("").reverse().join("");
    return numero2 === alReves
    ? alert(`Sí, número original ${numero}, número al revés ${alReves}`)
    : alert(`No, número original ${numero}, número al revés ${alReves}`);
}
entrada(); */
/* 10) -------------------------------------------------- */

/* 11) -------------------------------------------------- */
/* const entrada = () => {
    let numero = prompt('Ingrese el número');
    numero = parseInt(numero);
    if (numero<=0) return alert('Valores mayores a 0'); 
    if (isNaN(numero)) return alert('No es un número');
    if (!numero) return alert('No ingresó el numero.');

    let factorial = 1; // Inicia la multiplicación
    for (let i=numero; i>1 ;i--) {
        factorial *=i; // o factorial = factorial * i;
        console.log(factorial);
    }
    return alert(`El factorial es ${factorial}`);
}
entrada(); */
/* 11) -------------------------------------------------- */
