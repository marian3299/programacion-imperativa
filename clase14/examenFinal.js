//EJERCICIO 1
const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]


const autosMayorIgual = arr => {
    const arrayFiltrado = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].modelo >= 2020){
            arrayFiltrado.push(arr[i]);
        }
        
    }

    return arrayFiltrado;
}

let respuestaEjercicio1 = autosMayorIgual(autos);
console.log(respuestaEjercicio1);


//EJERCICIO 2
let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenarPorPromedioDesc = arr => {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length - 1; j++) { 
            if (arr[j].notaPromedio < arr[j + 1].notaPromedio) { 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let respuestaEjercicio2 = ordenarPorPromedioDesc(estudiantes);
console.log(respuestaEjercicio2);


//EJERCICIO 3
let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

const elementosColumna = (mat, columna) => {

    let arrayElementosColumna = [];

    for (let i = 0; i < mat.length; i++) {
        arrayElementosColumna.push(mat[i][columna])
        
    }

    return arrayElementosColumna;
}

let respuesta1Ejercicio3 = elementosColumna(matrix,0);
console.log(respuesta1Ejercicio3);

const cambaiarImpares = mat => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if(mat[i][j] % 2){
                mat[i][j] = 0;
            }
            
        }
        
    }

    return mat;
}

let respuesta2Ejercicio3 = cambaiarImpares(matrix);
console.table(respuesta2Ejercicio3);