const prompt = require("prompt-sync")({sigint:true});
//No es necesaria la palabra function
//Hay que asignarle la funcion a una variable

//let nombreFuncion = parametros => acciones
let laMitad = numero => numero/2;
console.log(laMitad(8))


//Si tienemos mas de un parametro se ponen entre parentesis 
let dividir = (numeroA,numeroB) => numeroA/numeroB
console.log(dividir(20,4))

//Si tenemos mas de una linea de codigo hay que poner llaves y return
let esMultiplu = (a,b) => {
    let resto = a%b
    return resto == 0
}

//Si no tenemos parametros se pone ()
let saludo = () => 'Hola Mundo'

//Las funciones se ponen con const
//Se usan las funciones expresada de tipo arrow

//Crea una funcion que convierta pesos a dolares 
//Dando la posibilidad de que sea dinamico la cantidad de pesos y el valor del dolar actual
const conversor = (cantidadPesos, valorDolar) => cantidadPesos/valorDolar
let dolares = conversor(1000,17)
console.log(dolares.toFixed(2))


//Un profesor quiere un sistema donde pueda ingresar tres nota y le devuelva el promedio del alumno
//Que devuelva un string que diga 'el promedio es x'
const promediar = (nombre, nota1, nota2, nota3) => {
    let promedio = (nota1 + nota2 + nota3)/3
    return `El promedio de ${nombre}: ${promedio}`
}

let promedio = promediar('Mariana', 7, 10, 8)
console.log(promedio)

//CALCULADORA 
const sumar = (a,b) => a+b
const restar = (a,b) => a-b
const multiplicar = (a,b) => a*b
const divide = (a,b) => a/b

console.log('--------------------')

let numero1 = parseInt(prompt('Ingrese un numero: '))
let numero2 = parseInt(prompt('Ingrese otro numero: '))

let suma = sumar(numero1,numero2)
console.log(suma)

let resta = restar(numero1,numero2)
console.log(resta)

let multiplicacion = multiplicar(numero1,numero2)
console.log(multiplicacion)

let division = divide(numero1,numero2)
console.log(division)

console.log('-----------------------')

const cuadradoDeUnNumero = number => multiplicar(number,number)
let cuadrado = cuadradoDeUnNumero(numero1)
console.log(cuadrado)



let numero3 = parseInt(prompt('Ingrese otro numero: '))
const promedioDeTreNumeros = (a,b,c) => {
    let suma = a+b+c
    return divide(suma,2)
}
let promedio2 = promedioDeTreNumeros(numero1,numero2,numero3)
console.log(promedio2)



let numeroTotal = parseInt(prompt('Ingrese un numero: '))
let porcentajeASacar = parseInt(prompt('Ingrese el porcentaje a sacar: '))
const calcularProcentaje = (numeroTotal,porcentaje) => multiplicar(numeroTotal, divide(porcentaje,100))
let porcentaje = calcularProcentaje(numeroTotal, porcentajeASacar)
console.log(`${porcentaje} es el ${porcentajeASacar}% de ${numeroTotal}`)



let porcentajeAGenerar = parseInt(prompt('Ingrese el porcentaje a generar: '))
let numeroTotal2 = parseInt(prompt('Ingrese un numero: '))
const generadorDePorcentaje = (porcentajeAGenerar, total) => divide(multiplicar(porcentajeAGenerar, 100), total)
let porcentaje2 = generadorDePorcentaje(porcentajeAGenerar,numeroTotal2)
console.log(`${porcentajeAGenerar} equivale al ${porcentaje2}% de ${numeroTotal2}`)














