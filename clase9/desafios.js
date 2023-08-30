/* Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.
 */
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edades2 = [21, 12, 15, 18, 25];
let mayor = [];
let mayorIgual = [];
let menor = [];

const edadesOrdernar = arr => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 18) {
            mayor.push(arr[i]);
        }

        if (arr[i] >= 18) {
            mayorIgual.push(arr[i]);
        } else {
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
    for (i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    let promedio = suma / arr.length;
    return promedio;
}

console.log(edadesPromedio(edades2));


const incrementarEnUno = arr => {
    for (i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }

    return arr;
}

console.log(incrementarEnUno(edades));



/*Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un array con las cuentas habilitadas.
Obtener un array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.
*/
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        },
    ]




const edadMenor30 = arr => {
    let edadMenor = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular < 30) {
            edadMenor.push(arr[i]);
        }
    }

    return edadMenor;
}

console.log(edadMenor30(arrayCuentas));

const edadMayorIgual30 = arr => {
    let edadMayor = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular >= 30) {
            edadMayor.push(arr[i]);
        }
    }

    return edadMayor;
}

console.log(edadMayorIgual30(arrayCuentas));


const edadMenorIgual30 = arr => {
    let edadMenorIgual = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular <= 30) {
            edadMenorIgual.push(arr[i]);
        }
    }

    return edadMenorIgual;
}

console.log(edadMenorIgual30(arrayCuentas));


const titularJoven = arr => {
    let newArr = [];
    let edadMenor = arr[0].edadTitular;

    for (i = 0; i < arr.length; i++) {
        if (edadMenor >= arr[i].edadTitular) {
            newArr.pop(arr[i]);
            edadMenor = arr[i].edadTitular;
            newArr.push(arr[i]);
        }
    }

    return newArr;

}

console.log(titularJoven(arrayCuentas));


console.log('-----------------------------------');


const cuentasHabilitadas = arr => {
    let habilitado = [];
    let deshabilitado = [];

    for (i = 0; i < arr.length; i++) {

        arr[i].estaHabilitada === true ? habilitado.push(arr[i]) : deshabilitado.push(arr[i]);

    }

    return { habilitado, deshabilitado };

}

console.log(cuentasHabilitadas(arrayCuentas));



console.log('-----------------------------------');


const cuentaSaldoMenor = arr => {
    let newArr = [];
    let saldoMenor = arr[0].saldo;
    for (i = 0; i < arr.length; i++) {
        if (saldoMenor >= arr[i].saldo) {
            newArr.pop(arr[i]);
            saldoMenor = arr[i].saldo;
            newArr.push(arr[i]);
        }

    }

    return newArr;

}

console.log(cuentaSaldoMenor(arrayCuentas));




console.log('-----------------------------------');


const cuentaSaldoMayor = arr => {
    let newArr = [];
    let saldoMayor = arr[0].saldo;
    for (i = 0; i < arr.length; i++) {
        if (saldoMayor <= arr[i].saldo) {
            newArr.pop(arr[i]);
            saldoMayor = arr[i].saldo;
            newArr.push(arr[i]);
        }

    }

    return newArr;

}

console.log(cuentaSaldoMayor(arrayCuentas));




/* Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico */
console.log('-----------------------------------');
const generarID = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i + 1;
    }
}

generarID(arrayCuentas);
console.log(arrayCuentas);

/* Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null */
console.log('-----------------------------------');
const buscarPorId = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return arr[i];
        }
    }

    return null;


}

console.log(buscarPorId(arrayCuentas, 9));




/* Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo 
enviado por parámetro */
console.log('-----------------------------------');
const filtrarPorSaldos = (arr, saldo) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].saldo < saldo) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filtrarPorSaldos(arrayCuentas, 2000));


/*Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, 
caso contrario retornar undefined   */
console.log('-----------------------------------');
const incrementarSaldo = (arr, id, saldo) => {

    const cuenta = buscarPorId(arr, id);
    if (cuenta) {
        cuenta.saldo += saldo;
    } else {
        return undefined;
    }

}


incrementarSaldo(arrayCuentas, 3, 1000);
console.log(arrayCuentas);


