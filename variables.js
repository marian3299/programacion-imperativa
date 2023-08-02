var nombre = 'Mariana'; //var ya no se usa
console.log(nombre);

let numeroPreferido = 3; //Una variable declarada con let no puede ser redefinida dentro del mismo bloque
console.log(numeroPreferido);

if(true){
    let numeroPreferido = 5;
    console.log(numeroPreferido);
}
//let respeta los bloques de codigo, es decir, no son variables globales. Entonces podemos tener varias variables con el mismo nombre en diferentes bloques de codigo

const apellido = 'Ampudia'; //Una variable declarada con const no puede cambiar su valor porque es una constante 
console.log(apellido);


//TIPOS DE DATO
//Number
let edad = 33;
let precio = 150.50;

//String 
let nombre = 'Mariana';

//Booleano
let veradero = true; 
let falso = false;

//NaN: not a number, indica que el valor no es un numero. Me lo devuelve la consola cuando una operacion no se puede realizar matematicamente
let notANumber = NaN;

//null: valor vacio o desconocido
let nulo = null;

//undefined: ausencia de valor hasta que le asignamos uno
let sinValor; 

//Objeto: conjutos de mucha informacion
let persona = {
    nombre: 'Mariana',
    edad: 23
}

//Array: nos deja agrupar varios tipos de datos en una sola variable
let paises = ['Argentina', 'Venezuela', 'Colombia'];