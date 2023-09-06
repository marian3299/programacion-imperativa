//Matrices: arreglo bidimensional 
//Se forma una matricas cuando dentro de un arreglo hay mas arreglos
//Nos sirve para manejar grandes datos
//let matriz = [[],[],[]]

//Matrices cuadradas: cuando tiene la misma cantidad de filas y columnas. En estos casos podemos recorres las diagonales
let matriz = [
    [2, 4, 6], //fila 0
    [1, 7, 2], //fila 1
    [9, 2, 4]  //fila 2
]

//ACCEDER A VALORES 
//matriz[fila][columna]
console.log(matriz[0][1]); //fila 0, columna 1
console.log(matriz[2][1]); //fila 2, columna 1


//RECORRER FILAS 
//El valor de la fila nunca cambia, lo que cambia es el valor de la columna

//matriz[2][0]
//matriz[2][1]
//matriz[2][2]

const recorrerFila = (fila,mat) => {
    let suma = 0;
    for(let i=0; i < mat[fila].length; i++){ //Tomamos la longitud de la fila 
        //console.log(mat[2][i]);
        suma += mat[fila][i];
    } 

    return suma;
}

let sum = recorrerFila(1,matriz);
console.log(sum);
console.table(matriz);



//RECORRER COLUMNAS
//matriz[0][1]
//matriz[1][1]
//matriz[2][1]

const recorrerColumnas = mat => {
    for(let i=0; i<mat.length; i++){ //La longitud la obtenemos de la misma matriz porque las columnas no son arrays        mat[i][1];
        mat[i][1] = 'cambio'
    }

}

recorrerColumnas(matriz);
console.table(matriz);

//¿Que pasa si la matriz no es cuadrada?
let matrix = [
    [2, 4, 6], //fila 0
    [1], //fila 1
    [9, 2, 4]  //fila 2
]

const recorrerColumnas2 = mat => {
    let sum = 0;
    for(let i=0; i<mat.length; i++){ //La longitud la obtenemos de la misma matriz porque las columnas no son arrays        mat[i][1];
        //Vamos a condicionar que el elemento exista
        if(mat[i][1] !== undefined){ //Preguntamos que si el elemento no es undefined, esto quiere decir que si hay un elemento en ese posicion
            sum += mat[i][1];
        }
    }

    return sum;

}

let suma = recorrerColumnas2(matrix);
console.table(suma);