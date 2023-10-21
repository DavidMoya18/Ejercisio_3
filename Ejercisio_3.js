// Programa 1: Longitud de un arreglo
const arregloNumeros = [3, 7, 12, 19];
console.log(`La longitud del arreglo es: ${arregloNumeros.length}`);

// Programa 2: Verificar valor booleano
const esVerdadero = true;
if (esVerdadero) {
    console.log("El valor es verdadero");
} else {
    console.log("El valor es falso");
}

// Programa 3: Mostrar frutas
const frutas = ["manzana", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Programa 4: Imprimir números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Programa 5: Sumar números pares del 1 al 100
let suma = 0;
for (let i = 2; i <= 100; i += 2) {
    suma += i;
}
console.log(`La suma de los números pares del 1 al 100 es: ${suma}`);

// // Programa 6: Tabla de multiplicar
// // (Este programa es mejor ejecutarlo en un navegador debido al uso de 'prompt')
 const numero = prompt("Ingrese un número para ver su tabla de multiplicar:");
 for (let i = 1; i <= 10; i++) {
     console.log(`${numero} x ${i} = ${numero * i}`);
}

// Programa 7: Suma de números impares del 1 al 50
let sumaImpares = 0;
for (let i = 1; i <= 50; i += 2) {
    sumaImpares += i;
}
console.log(`La suma de los números impares del 1 al 50 es: ${sumaImpares}`);

// Programa 8: Verificar números en una lista
const listaNumeros = [2, 5, 7, 10, "hola", 15, 8];
for (let numero of listaNumeros) {
    if (typeof numero === "number") {
        if (numero % 2 === 0) {
            console.log(`${numero} es par.`);
        } else {
            console.log(`${numero} es impar.`);
        }
    } else {
        console.log(`${numero} no es un número válido.`);
    }
}
