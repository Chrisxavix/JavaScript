/* -------- Ejercicios JavaScript ---------- */

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
Ejemplo: miFuncion("Hola Mundo"), devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
Ejemplo: miFuncion("Hola Mundo", 4), devolverá "Hola".

3) Programa una función que dado un String te devuelva un Array de textos separados por cierto caracter.
Ejemplo: miFuncion('hola que tal', ' '), devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces.
Ejemplo: miFuncion('Hola Mundo', 3), devolverá Hola Mundo Hola Mundo Hola Mundo. */


/* 1) --------------------------------------------------- */
/* Nota: entrada es un valor string, en el primer if, se 
realiza la pregunta haciendo una negación, es decir,
si entrada no es un string, responde que no se ingreso 
valores.
!isNaN: Un valor ingresado, así sea un número lo toma
como string, por lo que la función !isNaN valida 
esa opción de
números */

/* Normal */
/* let entrada = prompt('Ingrese la cadena');
if (!entrada) {
    alert('No se ingresó valores.');
} else if (!isNaN(entrada)) {
    alert('Es un número, no una cadena.');
} else {
    alert(`Su cadena ${entrada}, tiene ${entrada.length} letras.`)
} */

/* Con función */
/* function entrada(){
    let resultado = prompt('Ingrese la cadena');
    if (!resultado) {
        alert('No hay valores');
    } else if (!isNaN(resultado)) {
        alert('Es un numero')
    } else {
        alert(`Su cadena ${resultado}, tiene ${resultado.length} letras.`)
    }
}
entrada(); */
/* 1) --------------------------------------------------- */

/* 2) --------------------------------------------------- */
/* function entrada () {
    let cadena = prompt('Ingrese la cadena');
    let longitud = prompt('Ingrese la longitud a recortar');
    longitud = parseInt(longitud); 
    if (!cadena) {
        alert('No ingreso la cadena.');
    } else if (!longitud) {
        alert('No ingreso la longitud.');
    } else if (!isNaN(cadena)) {
        alert('La cadena es un número.')
    }else {
        if (longitud>cadena.length) {
            alert('La longitud excede el límite de la cadena.')
        } else {
            alert(`Cadena recortada: ${cadena.slice(longitud)}`)
        }
    }
}
entrada(); */
/* 2) --------------------------------------------------- */

/* 3) --------------------------------------------------- */
/* function entrada () {
    let cadena = prompt('Ingrese la cadena');
    let separador = prompt('Indique el separador');
    if (!cadena) {
        alert('No ingreso la cadena.');
    } if (!separador) {
        alert('No ingreso la separador.');
    } else if (!isNaN(cadena)) {
        alert('La cadena es un número.');
    }else {
        alert(cadena.split(separador));
        console.log(cadena.split(separador));
    }
}
entrada(); */
/* 3) --------------------------------------------------- */

/* 4) --------------------------------------------------- */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    let repetidor = prompt('Número de repeticiones');
    repetidor = parseInt(repetidor);
    if (!cadena) return alert('No ingreso la cadena.');
    if (!repetidor) return alert('No ingreso el repetidor.');
    if (Math.sign(repetidor)=== -1) return alert('No puede repetir.');
    if (!isNaN(cadena)) return alert('La cadena es un número.');
    for (let i=1; i<=repetidor; i++) {
        console.log(cadena, i);
    }
}
entrada(); */
/* 4) --------------------------------------------------- */


