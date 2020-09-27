/* -------- Ejercicios JavaScript ---------- */

/* 24) Programa una función que dado un arreglo de 
números devuelva un objeto con dos arreglos, el primero 
tendrá los numeros ordenados en forma ascendente y el 
segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de 
elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].

26) Programa una función que dado un arreglo de 
números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* ----------------- DESARROLLO -------------------- */

/* 24) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    const array=[];
    if (!cadena) return alert('No ingresó o no es un número.');  
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        if (!valor) return alert('No ingresó o no es un número.');  
        array.push(valor);
    } 
    console.log(array); 
    const asc = array.map(valor => valor).sort();
    const desc = array.map(valor => valor).sort().reverse();
    console.log(asc);
    console.log(desc);
}
entrada(); */
/* 24) ------------------------------------------------- */

/* 25) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    const array=[];
    if (!cadena) return alert('No ingresó o no es un número.');  
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        if (!valor) return alert('No ingresó o no es un número.');  
        array.push(valor);
    } 
    console.log(array); 
    const dupli = array.filter((valor, index, self)=> self.indexOf(valor)===index)
    console.log(dupli);
}
entrada(); */
/* 25) ------------------------------------------------- */

/* 26) ------------------------------------------------- */
/* const entrada = () => {
    let cadena = parseInt(prompt('Cuántos al array'));
    const array=[];
    let promedio = 0;
    if (!cadena) return alert('No ingresó o no es un número.');  
    for ( let i =1; i<=cadena; i++)
    {
        let valor = parseInt(prompt(`Ingrese el ${i} valor`))
        if (isNaN(valor)) return alert('No ingresó o no es un número.');  
        promedio=promedio+valor;
        array.push(valor);
    } 
    console.log(array);
    console.log(promedio/cadena);
}
entrada(); */
/* 26) ------------------------------------------------- */
