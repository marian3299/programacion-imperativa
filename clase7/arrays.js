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


//Array dentro de array
let variados = ['Nacho', 34, true, [34,28,37,40]];
console.log(variados[3]); //Seleccionamos el array dentro del array variados
console.log(variados[3][1]); //Acceder a un dato del array que esta dentro de nuestro array


//--------------STRINGS-----------------
//Son objetos para JS
//Podemos acceder al string como un array porque cada caracter ocupa una posicion y tiene un indice

//length: nos da la longitud del string
let mensaje = 'Gran dia para, practicar JS';
console.log(mensaje.length);

//indexOf(): nos muestra en que index esta una cadena de texto en nuestro string 
console.log(mensaje.indexOf('djh'));

//slice(): hace un recorte del string. (Inicio recorte, fin)
//Puede recibir solo un valor. Recorta la cantidad de caracteres indicados iniciando desde index 0
console.log(mensaje.slice(0,5));

//trim(): elimina los espacios al inicio y final del string. 
let mensaje2 = '     Gran dia para practicar JS  ';
console.log(mensaje2.trim());

//split(): separa el string y lo guarda en un array
//Recibe por que queremos separa el string. En este caso por cada espacio
console.log(mensaje.split(' '))

//replace(): reemplaza un pedazo del string con lo que ingresemos
//No altera la cadena de texto original
console.log(mensaje.replace('JS', 'Python'));

function menciona (texto,palabra){
    if(texto.indexOf(palabra) != -1){
        return true;
    }else{
        return false;
    }
}

console.log(menciona('Mariana es la mejor', 'mejor'));
