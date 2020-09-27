/* -------- Ejercicios JavaScript ---------- */

/* 15) Programa una función para convertir números de base
binaria a decimal y viceversa, pe. miFuncion(100,2) 
devolverá 4 base 10.

16) Programa una función que devuelva el monto final
después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800. */

/* ----------------- DESARROLLO -------------------- */

/* 15) ------------------------------------------------- */
/* const entrada = () => {
    let numero = parseInt( prompt('Ingrese el valor'));
    let base = 2;
    if (numero<=0) return alert('Solo números mayores a 1.');
    if (base===2){
        return alert(`${parseInt( numero)} base ${parseInt( base)} = ${parseInt(numero,base)} base`);
    }
}
entrada(); */
/* 15) ------------------------------------------------- */

/* 16) ------------------------------------------------- */
/* const entrada = () => {
    let valor = parseInt( prompt('Ingrese el valor'));
    if (valor<=0) return alert('No es un valor a descontar.');
    if (!valor) return alert('No ingresó los valores o no es un valor.');
    let descuento = valor * 0.20;
    return alert(`El descuento del 20% de $${valor}, es de $${descuento}, por lo que debe pagar $${valor-descuento}.`)
}
entrada();  */

/* const entrada = () => {
    let valor = parseInt(prompt('Ingrese el valor'));
    let descuento = parseInt(prompt('Ingrese el descuento'));
    if (valor<=0) return alert('No es un valor a descontar.');
    if (descuento<=0) return alert('No es un valor de descuento.');
    if (!valor) return alert('No ingresó los valores o no es un valor.');
    if (!descuento) return alert('No ingresó los valores o no es un valor.');
    return alert(`El descuento del 20% de $${valor}, es de $${(valor*descuento)/100}, por lo que debe pagar $${valor-(valor*descuento)/100}.`)
}
entrada();  */

/* 16) ------------------------------------------------- */

