/* -------- Ejercicios JavaScript ---------- */

/* 21) Programa una función que dado un array numérico 
devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

21.1) Ingresar datos a un array. 

22) Programa una función que dado un array devuelva el 
número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

23) Programa una función que dado un array de 
números devuelva un objeto con 2 arreglos en el 
primero almacena los números pares y en el segundo 
los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* ----------------- DESARROLLO -------------------- */

/* 21) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    let array = [];
    let arrayMulti = [];
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        let multi = Math.pow(valor, 2);
        arrayMulti.push(multi);
        array.push(valor);
    }
    console.log(array);
    console.log(arrayMulti);
    console.log(arrayMulti[3]);
    for (let x of arrayMulti){
        console.log(x)
    }
}
entrada(); */
/* 21) ------------------------------------------------- */

/* 21.1) ----------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    let array = []
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        array.push(valor);
    }
    console.log(array);
    for (let x of array){
        console.log(x)
    }
}
entrada(); */
/* 21.1) ----------------------------------------------- */

/* 22) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    let array = []
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        array.push(valor);
    }
    console.log(Math.min(...array));
    console.log(Math.max(...array));
}
entrada(); */
/* 22) ------------------------------------------------- */

/* 23) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    let array = [];
    let arrayPares = [];
    let arrayImpares = [];
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        array.push(valor);
        if ((valor%2)===0){
            arrayPares.push(valor)
        } else {
            arrayImpares.push(valor)
        }
    }
    console.log(array);
    console.log(arrayPares);
    console.log(arrayImpares);
}
entrada(); */

/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    const array = [];
    for ( let i =1; i<=cadena; i++)
    {
        const valor = parseInt(prompt(`Ingrese el ${i} valor`))
        array.push(valor);
    }
    console.log(array);
    const arrayPares = array.filter(valor => (valor%2)===0);
    const arrayImpares = array.filter(valor => (valor%2)===1);
    console.log(arrayPares);
    console.log(arrayImpares);
}
entrada(); */
/* 23) ------------------------------------------------- */
