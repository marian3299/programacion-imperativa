let departamentos = [
    {
        'id': 1,
        'ambientes': 2,
        'disponible': true,
        'aceptaMascotas': true,
        'cantidadPersonas': 2,
        'precioAlquiler': 42700
    },
    {
        'id': 2,
        'ambientes': 1,
        'disponible': false,
        'aceptaMascotas': true,
        'cantidadPersonas': 2,
        'precioAlquiler': 29000
    },
    {
        'id': 3,
        'ambientes': 2,
        'disponible': false,
        'aceptaMascotas': false,
        'cantidadPersonas': 3,
        'precioAlquiler': 53000
    },
    {
        'id': 4,
        'ambientes': 1,
        'disponible': false,
        'aceptaMascotas': false,
        'cantidadPersonas': 1,
        'precioAlquiler': 20000
    },
    {
        'id': 5,
        'ambientes': 2,
        'disponible': false,
        'aceptaMascotas': true,
        'cantidadPersonas': 3,
        'precioAlquiler': 46700
    },
    {
        'id': 6,
        'ambientes': 3,
        'disponible': true,
        'aceptaMascotas': true,
        'cantidadPersonas': 5,
        'precioAlquiler': 74000
    },
    {
        'id': 7,
        'ambientes': 3,
        'disponible': false,
        'aceptaMascotas': true,
        'cantidadPersonas': 3,
        'precioAlquiler': 55800
    },
    {
        'id': 8,
        'ambientes': 3,
        'disponible': true,
        'aceptaMascotas': true,
        'cantidadPersonas': 4,
        'precioAlquiler': 68000
    },
    {
        'id': 9,
        'ambientes': 2,
        'disponible': true,
        'aceptaMascotas': true,
        'cantidadPersonas': 2,
        'precioAlquiler': 43200
    },
    {
        'id': 10,
        'ambientes': 1,
        'disponible': true,
        'aceptaMascotas': true,
        'cantidadPersonas': 1,
        'precioAlquiler': 21500
    },
]


const buscarPorId = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return arr[i];
        }

    }
}

//console.log(buscarPorId(departamentos, 5));

const departamentosDisponible = arr => {
    let departamentosDisponibles = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].disponible) {
            departamentosDisponibles.push(arr[i]);
        }

    }

    return departamentosDisponibles;
}

//console.log(departamentosDisponible(departamentos));

const departamentosNoDisponibles = arr => {
    let listaDepartamentosNoDisponibles = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].disponible) {
            listaDepartamentosNoDisponibles.push(arr[i]);
        }

    }

    return listaDepartamentosNoDisponibles;
}

//console.log(departamentosNoDisponibles(departamentos));



const filtrarPorPrecio = (precioMaximo) => {

    let disponibles = departamentosDisponible(departamentos);
    let newArr = [];

    for (let i = 0; i < disponibles.length; i++) {
        if (disponibles[i].precioAlquiler <= precioMaximo) {
            newArr.push(disponibles[i])
        }

    }

    return newArr;
}

//console.log(filtrarPorPrecio(50000));

const ordenarAsc = (arr, propiedad) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (propiedad) {
                if (arr[j][propiedad] > arr[j + 1][propiedad]) { //Ponemos la propiedad entre [] porque es un string, si ponemos '.propiedad' no funcionaria
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

    }

    return arr;

}

//console.log(ordenarAsc(departamentos, 'ambientes'));


const calcularRecaudacion = (arr) => {
    
    let recaudacion = 0;

    for (let i = 0; i < arr.length; i++) {
        recaudacion += arr[i].precioAlquiler;
        
    }

    return recaudacion;
}

//console.log(calcularRecaudacion(departamentosNoDisponibles(departamentos)));


let matriz = [
    [2,5,3],
    [1,5,7],
    [3,7,2]
]

const recorrerMatriz = mat => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            console.log(mat[i][j]);
            
        }
        
    }
}

//recorrerMatriz(matriz);

const recorrerFila = (mat,fila) => {
    for (let i = 0; i < mat[fila].length; i++) {
        console.log(mat[fila][i])
        
    }
}

//recorrerFila(matriz,0);


const recorrerColumna = (mat, col) => {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][col])
        
    }
}

//recorrerColumna(matriz,1);

const diagonalPrincial = mat => {
     for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][i]);
        
    }
}

//diagonalPrincial(matriz);

const diagonalSecundaria = mat => {
    let count = mat.length -1;
    for (let i = 0; i < mat.length; i++) {
       console.log(mat[i][count--]);   
   }
}

//diagonalSecundaria(matriz);

const recorrerPares = mat => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if(!(mat[i][j] % 2)){
                console.log(mat[i][j]);
            }
            
        }
        
    }
}

recorrerPares(matriz);