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




//RECORRER DIAGONAL PRINCIPAL
let matriz3 = [
    [2, 4, 6], //fila 0
    [1, 7, 2], //fila 1
    [9, 2, 4]  //fila 2
]

//matriz[0][0]
//matriz[1][1]
//matriz[2][2]

const recorrerPrincipal = mat => {
    for(let i=0; i < mat.length; i++){
        console.log(mat[i][i]);
    }
}

recorrerPrincipal(matriz3);




//RECORRER DIAGONAL SECUNDARIA 
//matriz[0][2]
//matriz[1][1]
//matriz[2][0]

const recorrerSecundaria = mat => {
    for(let i=0; i<mat.length; i++){
        console.log(mat[i][mat.length - 1 - i]);
    }
}

recorrerSecundaria(matriz3);




//RECORRER MATRIZ COMPLETA
//Lo hacemos recorriendo todas las filas 
console.log('---------------------------------------')
const recorrerMatriz = mat => {
    for(let fila=0; fila<mat.length; fila++){ //El primer ciclo for recorre las filas 
        for(let col=0; col<mat[fila].length; col++){ //Recorre las columnas despues de ingresar a una fila. Se repite de acuerdo de la longitud de la fila en la que estamos
            console.log('Estoy recorriendo la fila ' + fila + ' en la columna ' + col);
            console.log(mat[fila][col]);
        }
    }
}

recorrerMatriz(matriz3);




//EJERECICIO
//Empezamos a contar los dias desde el Lunes
//El mes de febrero tiene 28 dias
let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], //Semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], //Semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],//Semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950]   //Semana 5
]

//Creando una funcion reutilizable calcular el gato totoal de la tercer semana 
const gastoSemanal = (mat, semana) => {
    let fila = semana - 1;
    let gastoTotal = 0;

    for(let i=0; i < mat[fila].length; i++){
        gastoTotal += mat[fila][i];
    }

    return gastoTotal;
}

let totalSemanaTres = gastoSemanal(gastos,3);
console.log(totalSemanaTres);



//Creando una funcion reutilizable
//Queremos saber el total de lo que se gasto sumando todos los dias sabado
const gastoPorDia = (mat, dia) =>{
    let col = dia-1;
    let gastoTotal = 0;

    for(let i=0; i<mat.length; i++){ 
        if(mat[i][col] !== undefined){ 
            gastoTotal += mat[i][col];
        }
    }

    return gastoTotal;

}

let gastoSabados = gastoPorDia(gastos, 6);
console.log(gastoSabados);




//Calcular el total gastado del mes 
const gastoMes = mat =>{
    let gastoTotal = 0;
    for(let fila=0; fila<mat.length; fila++){ //El primer ciclo for recorre las filas 
        for(let col=0; col<mat[fila].length; col++){ //Recorre las columnas despues de ingresar a una fila. Se repite de acuerdo de la longitud de la fila en la que estamos
            
            gastoTotal += mat[fila][col];
        }
    }

    return gastoTotal;
}

let gastoMesTotal = gastoMes(gastos);
console.log(gastoMesTotal);




//En el dia que mas se gasto, cuanto fue?
//En que dia y semana se produjo ese gasto
const mayorGasto = mat => {

    let mayor = mat[0][0];
    let dia = 0;
    let semana = 0;

    for(let fila=0; fila<mat.length; fila++){ 
        for(let col=0; col<mat[fila].length; col++){ 
            if(mayor < mat[fila][col]){
                mayor = mat[fila][col];
                dia = col;
                semana = fila + 1;
            }
            
        }
    }

    return {monto: mayor, dia: dia, semana:semana};

}

let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

let mayor = mayorGasto(gastos);
console.log(mayor);
console.log(`El dia que mas se gasto fue un total de ${mayor.monto} que se produjo en el dia ${diasSemana[mayor.dia]} de la semana ${mayor.semana}`);
