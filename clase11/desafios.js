/* Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”.
*/
const numerosUnoACien = () => {
    for (let i = 1; i <= 100; i++) {
        
      if (i % 3 === 0 && i%5 ===0) {
        console.log(`${i}. fizzbuzz`);
      }else if(i%5 ===0){
        console.log(`${i}. buzz`)
      }else if(i % 3 === 0){
        console.log(`${i}. fizz`)
      } else{
        console.log(i)
      }

    }
};
  
numerosUnoACien();



/* Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; */

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const findValue = (arr,index) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[index]){
            return arr[i];
        }
    }

    return 'Valor no encontrado';
}

console.log(findValue(array,2));



/* Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—. */

const candidasDiasMes = numeroMes =>{
    if(numeroMes === 2){
        return '28 dias';
    }

    if(numeroMes >= 8){
        return numeroMes%2 == 0 ? '31 dias' : '30 dias';
    }
    if(numeroMes < 8){
        return numeroMes%2 == 0 ? '30 dias' : '31 dias';
    }
    
}

console.log(candidasDiasMes(4));



/* Escribir una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423. */
const invertirNumero = numero =>{
    let str = String(numero);
    let arr = str.split('');
    arr.reverse();
    let str2 = arr.join('');
    let numeroInvertido = Number(str2);

    return numeroInvertido;

}

console.log(invertirNumero(123));



/* Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */

let numeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const valoresRepetidos = arr =>{
    let numerosRepetidos = [];

    for(i=0; i<arr.length; i++){
        let valorIgual = arr[i];

        for(j=i+1; j<arr.length; j++){
            if(valorIgual === arr[j] && !numerosRepetidos.includes(valorIgual)){
                numerosRepetidos.push(valorIgual);
            }
        }


    }

    return numerosRepetidos;
}

console.log(valoresRepetidos(numeros));



/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 * 
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matrix = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
]

const sumaMatriz = mat => {
    let suma = 0;
    for(let i=0; i<mat.length;i++){
        for(let j=0; j<mat[i].length; j++){
            suma += mat[i][j];
        }
    }

    return suma;
}

console.log(sumaMatriz(matrix));




/* Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números.*/
const generarMatriz = () => {
    let matriz = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]

    let num = 1;
    for(let i=0; i<10;i++){
        for(let j=0; j<10; j++){
            matriz[i][j] = num;
            num++;
        }
    }

    return matriz;
}

let matriz = generarMatriz();
console.table(matriz);




//Sumar los valores de la diagonal principal y secundaria
const diagonalPrincipal = mat => {
    let suma = 0;
    for(let i=0; i < mat.length; i++){
        suma += mat[i][i];
    }

    return suma; 
}

const diagonalSecundaria = mat => {
    let suma = 0;
    for(let i=0; i<mat.length; i++){
        suma += mat[i][mat.length - 1 - i];
    }

    return suma;
}

let sumaPrincipal = diagonalPrincipal(matriz);
console.log(sumaPrincipal);
let sumaSecundaria = diagonalSecundaria(matriz);
console.log(sumaSecundaria);





