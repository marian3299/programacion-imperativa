let numerosDeLaSuerte = [15, 27, 153, 151];

let palabras = ['casa', 'avion', 'perro'];

console.log(numerosDeLaSuerte[0]);
//Si queremos imprimir una posicion que no existe nos va a regresar undefined

palabras[3] = 'gato';
console.log(palabras[3]);

//Los strings tambien son una coleccion. En vez de elementos tiene caracteres
let nombre = 'pepe';
console.log(nombre[0]);

nombre = nombre.toUpperCase();
console.log(nombre);

//Necesito saber si nombre tiene un caracter 'e'
let x = nombre.includes('E');
console.log(x);

//Para saber la longitud de el array o string
console.log(nombre.length);
console.log(palabras.length);

console.log(numerosDeLaSuerte.includes(27));

//Agregar un elemento a un array
numerosDeLaSuerte.push(15);
console.log(numerosDeLaSuerte);

//Eliminar el ultimo elemento
let borrado = numerosDeLaSuerte.pop();
console.log(numerosDeLaSuerte);
console.log(borrado);



let numeritos = [43, 105, 87, 12];
let arrayInvertido = [];

arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());
arrayInvertido.push(numeritos.pop());

console.log(arrayInvertido);

let palabras2 = ['casa', 'avion', 'perro', 'gato'];

for (let i = 0; i < palabras.length; i++){
    console.log(palabras2[i]);
}


let notas = [8, 9, 10];

const promediar = (arr) => {

    let acumulador = 0;

    for(i=0; i<arr.length; i++){
        acumulador += arr[i];
    }

    let promedio = acumulador/arr.length;
    return promedio;
}

console.log(promediar(notas));