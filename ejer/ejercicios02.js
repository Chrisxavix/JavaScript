
/* 5) Programa una función que invierta las palabras de una 
cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".

6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7) Programa una función que valide si una palabra 
o frase dada, es un palíndromo (que se lee igual en un 
sentido que en otro), pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de 
caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, 
xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

/* ----------------- DESARROLLO -------------------- */

/* 5) --------------------------------------------------- */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    if (!cadena) return alert('No ingreso la cadena.');
    if (!isNaN(cadena)) return alert('La cadena es un número.');
    alert(cadena.split("").reverse().join(""));
}
entrada(); */

/* function reverse2(txt) {
    var arr4 = [];
    for (let i = 0; i < txt.length; i++) {
      arr4[i] = txt.charAt(i);
      console.log(txt.charAt(i))
    }

    var stringReverse = "";
    for (let i = arr4.length - 1; i >= 0; i--) {
      stringReverse += arr4[i];
    }
    console.log(stringReverse);
  }
reverse2('Chris'); */
/* 5) --------------------------------------------------- */

/* 6) --------------------------------------------------- */
/* Index of, busca un texto dentro una cadena y devuelve la 
posición en que encontró */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    let texto = prompt('Buscar la palabra repetida');
    if (!cadena) return alert('No ingreso la cadena.');
    if (!texto) return alert('No ingreso la repetición.');
    if (!isNaN(cadena)) return alert('La cadena es un número.');
    if (!isNaN(texto)) return alert('La repetición es un número.');
    let i = 0; // controla el ciclo while
    let contador = 0; // contar las veces que se repite
    while (i!==-1){ // -1 porque el método IndexOf al no  
                    // detectar el texto a buscar devuelve -1
        i = cadena.indexOf(texto, i); // i, iguala a la cadena
        if (i!==-1) {
        i++;
        contador++;
        }
    }
    return alert(`La palabra "${texto}", se repite ${contador} veces.`)
}
entrada(); */
/* 6) --------------------------------------------------- */

/* 7) --------------------------------------------------- */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena');
    if (!cadena) return alert('No ingreso la cadena.');
    if (!isNaN(cadena)) return alert('La cadena es un número.');
    cadena = cadena.toLowerCase(); // todo a minúscula
    let alreves = cadena.split("").reverse().join("");
    return cadena === alreves
    ? alert(`Sí, palabra original ${cadena}, palabra al revés ${alreves}`)
    : alert(`No, palabra original ${cadena}, palabra al revés ${alreves}`);
}
entrada(); */
/* 7) --------------------------------------------------- */

/* 8) --------------------------------------------------- */
/* const entrada = () => {
    let cadena = prompt('Ingrese la cadena secuencial');
    let contexto = prompt('Contexto a eliminar');
    if (!cadena) return alert('No ingreso la cadena.');
    if (!contexto) return alert('No ingreso el contexto.');
    if (!isNaN(cadena)) return alert('La cadena es un número.');
    if (!isNaN(contexto)) return alert('El contexto es un número.');
    // bandera ig, (i) detecta mayúsucula y minúscula
    // (g) no se detiene en la primera coincidencia
    alert(cadena.replace(new RegExp(contexto, "ig"), ''))
}
entrada(); */
/* 8) --------------------------------------------------- */
