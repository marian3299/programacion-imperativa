let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

const ordenarMenor = arr => {
    for (let i = 0; i < arr.length; i++) { //Obetiene elemento por elemento del array
        for (let j = 0; j < arr.length - 1; j++) { //Se le agrega el -1 para que se compare el penulimo numero con el ultimo y pare ahi. Compara el elemento del for anterior con cada un de los elementos de nuestro array
            if (arr[j] > arr[j + 1]) { //Verifica si el numero es mayor que el numero siguiente
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr
}

let orden = ordenarMenor(numeros)
console.log(orden);


//MAYOR A MENOR
const ordenarMayor = arr => {
    for (let i = 0; i < arr.length; i++) { //Obetiene elemento por elemento del array
        for (let j = 0; j < arr.length - 1; j++) { //Se le agrega el -1 para que se compare el penulimo numero con el ultimo y pare ahi. Compara el elemento del for anterior con cada un de los elementos de nuestro array
            if (arr[j] < arr[j + 1]) { //Verifica si el numero es mayor que el numero siguiente
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr
}

let orden2 = ordenarMayor(numeros)
console.log(orden2);



//ORDENAR STRINGS
let nombres = ['Juan', 'Maria', 'Pedro', 'Sofia'];
//Podemos usar las mismas funciones que creamos anteriormente porque el codigo toma el codigo ASCII del string
let ordenarNombres = ordenarMenor(nombres);
console.log(ordenarNombres);



//ARRAY DE OBJETOS
let alumnos = [
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Maria',
        edad: 24
    },
    {
        nombre: 'Pedro',
        edad: 54
    },
    
]

let ordenarObjeto = (arr,propiedad) => { //Agregamos propiedad para que el usuario indique por cual propiedad quiere ordenar el array de objetos
    for (let i = 0; i < arr.length; i++) { //Obetiene elemento por elemento del array
        for (let j = 0; j < arr.length - 1; j++) { //Se le agrega el -1 para que se compare el penulimo numero con el ultimo y pare ahi. Compara el elemento del for anterior con cada un de los elementos de nuestro array
            if (arr[j][propiedad] > arr[j + 1][propiedad]) { //Ponemos la propiedad entre [] porque es un string, si ponemos '.propiedad' no funcionaria
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr
}

let obj = ordenarObjeto(alumnos,'nombre'); //Queremos ordenar los objetos por nombre 
console.log(obj);


//FUNCION QUE ME SIRVE PARA ARRAYS Y ARRAYS CON OBJETOS
let ordenarAscendente = (arr,propiedad) => { //Agregamos propiedad para que el usuario indique por cual propiedad quiere ordenar el array de objetos
   
    for (let i = 0; i < arr.length; i++) { //Obetiene elemento por elemento del array
        for (let j = 0; j < arr.length - 1; j++) { //Se le agrega el -1 para que se compare el penulimo numero con el ultimo y pare ahi. Compara el elemento del for anterior con cada un de los elementos de nuestro array
            if(propiedad){ //Verifica si el usuario ingreso una propieda de un objeto
                if (arr[j][propiedad] > arr[j + 1][propiedad]) { //Ponemos la propiedad entre [] porque es un string, si ponemos '.propiedad' no funcionaria
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }else{
                if (arr[j] > arr[j + 1]) { 
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            
        }
    }

    return arr
}

console.log(ordenarAscendente(numeros));
console.log(ordenarAscendente(nombres));
console.log(ordenarAscendente(alumnos, 'edad'));



//DESAFIO
let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

console.log(ordenarAscendente(personas,'estatura'));