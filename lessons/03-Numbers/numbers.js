/* ------------------ Números ------------------------- */
/* Suma de dos valores con interpolación */
console.log('--------- 1 ---------');
const valor1 = 5;
const valor2 = 10;
result = valor1 + valor2;
console.log(`El resultado es ${result}, de la suma de ${valor1} + ${valor2}.`);


/* Redondear decimales, el (1) define cuántos decimales */
console.log('--------- 2 ---------');
const valorDecimal = 7.19;
console.log(valorDecimal.toFixed(1));

/* Devuelve el número entero */
console.log('--------- 3 ---------');
const valorEntero = 7.19;
console.log(parseInt(valorEntero));


/* Convertir string a valor numérico */
console.log('--------- 4 ---------');
const valorDecimal1 = 7.19;
const valorDecimal2 = '5.6'
console.log(valorDecimal1 + parseInt(valorDecimal2));


/* Suma de valores sin tomar la parte decimal */
console.log('--------- 5 ---------');
const valorSumaDecimal1 = 7.19;
const valorSumaDecimal2 = '5.6'
console.log(parseInt(valorSumaDecimal1) + parseInt(valorSumaDecimal2));

/* Suma de números con la parte decimal */
console.log('--------- 6 ---------');
const valorSumaDecimalv1 = 7.19;
const valorSumaDecimalv2 = '5.6'
console.log(parseFloat(valorSumaDecimalv1) + parseFloat(valorSumaDecimalv2));

/* Suma de dos números con ingreso de datos con parseInt() */
console.log('--------- 7 ---------');
console.log('Código comentado');
/* const num1 = prompt("Escriba el primer número");
const num2 = prompt("Escriba el segundo número");
result = parseInt(num1)  + parseInt(num2);
console.log('Resultado: ', result); */
/* --------------------- Números ------------------------- */
