/* -------- Ejercicios JavaScript ---------- */

/* 18) Programa una función que dada una cadena de 
texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 
4, Consonantes: 5.

19) Programa una función que valide que un texto 
sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero. */

/* ----------------- DESARROLLO -------------------- */

/* 18) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    if (!cadena) return alert('No ingresó datos.');
    if (!isNaN(cadena)) return alert('Ingrese una cadena. no un número');
    let vocales = 0;
    let consonantes = 0;
    for (let letra of cadena) {
        if (/[aeiouú]/.test(letra)){
            vocales++;
        } else {
            consonantes++;
        }
    }
    alert(`Fueron ${vocales} vocales y ${consonantes} consonantes.`)
}
entrada(); */

/* const contarVoCo2 = (cadena = undefined) => {
    try {
      if (cadena === undefined) throw new Error("No ingresaste una cadena");
      if (typeof cadena !== "string")
        throw new Error("No ingresaste una cadena validad");
  
      let palabras = cadena.toLowerCase().split(""),
        contadorV = 0,
        contadorC = 0;
  
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "a") contadorV++;
        else if (palabras[i] === "e") contadorV++;
        else if (palabras[i] === "i") contadorV++;
        else if (palabras[i] === "o") contadorV++;
        else if (palabras[i] === "u") contadorV++;
        else if (palabras[i] === " ") continue;
        else {
          contadorC++;
        }
      }
      return console.log(`Vocales:${contadorV}, Consonantes:${contadorC}`);
    } catch (error) {
      console.error(error);
    }
  };

contarVoCo2("Danis"); */
/* 18) ------------------------------------------------- */

/* 19) ------------------------------------------------- */
/* El (^) indica que no puede haber nada después de la expresión
que se va a validar, es decir, después de los [].
El signo de (+$) por cada valor de la cadena de texto.
La (g) a nivel global, y el test evalua si se cumple o no.*/
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    if (!cadena) return alert('No ingresó datos.');
    if (!isNaN(cadena)) return alert('Ingrese una cadena. no un número');
    let expresion = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(cadena);
    if (expresion) {
        alert(`El ${cadena} es válido.`)
    } else {
        alert(`El ${cadena} no es válido.`)
    }
}
entrada(); */
/* 19) ------------------------------------------------- */
