//Funcion expresada
let sumar = function (numeroA, nunmeroB) {
    return numeroA + nunmeroB;
}

console.log(sumar(2,3));


//Funcion declarada
function restar(numeroC,numeroD) {
    return numeroC-numeroD;
}

console.log(restar(10,2));

function saludar(nombre = 'visitante', apellido = 'anonimo'){ //Al asignarle valores a los parametros seran los valores por defecto
    return 'Hola ' + nombre + ' ' + apellido;
}

console.log(saludar()); //Como no recibe valores, va a imprimir los valores por defecto


//DESAFIO CLASE
function pulgadasACentimetros (pulgadas){
    let centimetros = pulgadas*2.54
    return centimetros
}

function stringAUrl (texto){
    let url = `http://www.${texto}.com`
    return url
}

function frase(texto){
    return `${texto}!!`
}

function edadPerro (edad){
    return edad*7
}

function horaTrabajo (sueldo){
    return sueldo/40
}

function calculadorIMC(altura,peso){
    let IMC = peso/(altura*altura)
    return IMC
}

function convertirAMayuscula (minuscula){
    let mayuscula = minuscula.toUpperCase()
    return mayuscula
}

function tipoDato (dato){
    return typeof(dato)
}

