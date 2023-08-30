const edades = [11,12,15,18,25,22,10,33,18,5];
const edades2 = [21,12,15,18,25];
let mayor = [];
let mayorIgual = [];
let menor = [];

const edadesOrdernar = arr => {
    for(i = 0; i<arr.length; i++){
        if(arr[i] > 18){
            mayor.push(arr[i]);
        }
    
        if(arr[i] >= 18){
            mayorIgual.push(arr[i]);
        }else {
            menor.push(arr[i]);
        }
    }
}

edadesOrdernar(edades2);

console.log(mayor);
console.log(mayorIgual);
console.log(menor);

const edadesPromedio = arr => {
    let suma = 0;
    for(i=0; i<arr.length ; i++){
        suma += arr[i];
    }

    let promedio = suma/arr.length;
    return promedio;
}

console.log(edadesPromedio(edades2));


const incrementarEnUno = arr => {
    for(i=0;i<arr.length;i++){
        arr[i] += 1;
    }

    return arr;
}

console.log(incrementarEnUno(edades));
