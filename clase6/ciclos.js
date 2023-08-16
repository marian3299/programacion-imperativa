const prompt = require("prompt-sync")({sigint:true});
//Grupo 6: Josmar Diaz, Mariana Ampudia, Zabdiel Isai Silvestre, Jurany Adelia Ramirez
/* Crear una función que pida un valor por parámetro y muestre los 10 números siguientes. */
const numerosConsecutivos = numero => {
    for(let i=numero+1; i<=numero+10; i++){
        console.log(i);
    }
}

let num = parseInt(prompt('Ingrese un numero: '));
numerosConsecutivos(num);

console.log('--------------------------')

/* Imprimir los números entre el 5 y el 20, saltando de tres en tres. */
for(let i=5;i<=20;i+=3){
    console.log(i)
}


console.log('--------------------------')

/*  Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100*/
let suma = 0;
for(let i=0; i<=100; i++){
    
    suma = suma + i;
    
}

console.log(suma);


console.log('--------------------------')
/* Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número. */

const factorial = number => {
    let factorialNumero = 1;
    for(i=1; i<=number; i++){
        factorialNumero *= i;
    }

    return factorialNumero;
}

let numFacotrial = parseInt(prompt('Ingrese el factorial que desea calcular: '))
console.log(factorial(numFacotrial));



console.log('--------------------------')
/* Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */
const fibonacci = limite => {
    a = 0;
    b = 1;

    while(a <= limite){
        console.log(a)
        let secuencia = a + b;
        a=b;
        b = secuencia;
    }


} 

let numFibonacci = parseInt(prompt('Ingrese el limite de la secuencia: '));
fibonacci(numFibonacci);