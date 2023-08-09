const prompt = require("prompt-sync")({sigint:true});


/* Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.
Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo */
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


//Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
const cuadradoDeUnNumero = number => multiplicar(number,number)
let cuadrado = cuadradoDeUnNumero(numero1)
console.log(cuadrado)


//Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
let numero3 = parseInt(prompt('Ingrese otro numero: '))
const promedioDeTreNumeros = (a,b,c) => {
    let suma = a+b+c
    return divide(suma,2)
}
let promedio2 = promedioDeTreNumeros(numero1,numero2,numero3)
console.log(promedio2)


//Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
//Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
let numeroTotal = parseInt(prompt('Ingrese un numero: '))
let porcentajeASacar = parseInt(prompt('Ingrese el porcentaje a sacar: '))
const calcularProcentaje = (numeroTotal,porcentaje) => multiplicar(numeroTotal, divide(porcentaje,100))
let porcentaje = calcularProcentaje(numeroTotal, porcentajeASacar)
console.log(`${porcentaje} es el ${porcentajeASacar}% de ${numeroTotal}`)


//Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
//Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.
let porcentajeAGenerar = parseInt(prompt('Ingrese el porcentaje a generar: '))
let numeroTotal2 = parseInt(prompt('Ingrese un numero: '))
const generadorDePorcentaje = (porcentajeAGenerar, total) => divide(multiplicar(porcentajeAGenerar, 100), total)
let porcentaje2 = generadorDePorcentaje(porcentajeAGenerar,numeroTotal2)
console.log(`${porcentajeAGenerar} equivale al ${porcentaje2}% de ${numeroTotal2}`)