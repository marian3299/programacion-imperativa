// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquienumber%2 === 0 && bool === true otro caso, retornar -1
const verificar = (number, bool) => {
    if(number%2 === 0 && bool === true){
        return 'Ha pasado la condición'
    }else if(number%2 !== 0 && bool === false){
        return 'No ha pasado la condición'
    }

    return -1
}

let verify = verificar(7, false);
console.log(verify);



const esApto = (edad, estudios) => {
    if(estudios){

        return edad >= 18 ? true : 'Solo puedes competir con un adultado acompañante';

    }else{
        return false;
    }
}



let numeros = [10, 5, 2, 1];

const devolverMenor = (arr) => {

    let menor = arr[0];

    for(let i = 1; i  < arr.length; i++){
        if(menor > arr[i]){
            menor = arr[i];
        }
    }

    return menor;
}

let menor = devolverMenor(numeros);
console.log(menor);




const alicia = [10, 80, 75, 54];
const bob = [90,20,25, 54];

const determinarGanador = function(a,b){

    let puntosA = 0;
    let puntosB = 0;

    for(i=0; i<a.length; i++){
        if(a[i] > b[i]){
            puntosA += 1;
            this.etapas.push('Alicia');
        }else if(a[i] < b[i]){
            puntosB += 1;
            this.etapas.push('Bob');
        }else{
            this.etapas.push('Empate');
        }
    }

    let ganador;

    if(puntosA > puntosB){
        ganador = 'Alicia';
    }else if(puntosA < puntosB){
        ganador = 'Bob';
    }else{
        ganador = 'Empate';
    }

    this.ganador = ganador;
}

let concurso = {
    encontrarGanador: determinarGanador, 
    etapas: [],
    ganador: ''

}