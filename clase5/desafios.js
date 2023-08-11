const prompt = require("prompt-sync")({sigint:true});

//Modifica para que:
//Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
//Importante: no se deberá mostrar ningún otro mensaje.
//Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
//Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

let edad = parseInt(prompt('Ingrese su edad: '));

if (edad < 0){
    console.log('"Error, edad inválida. Por favor ingrese un número válido')
}else if(edad < 18) {
    console.log('No puede pasar al bar')
}else if(edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}else if(edad >= 21){
    console.log("Felicidades por llegar a la mayoria de edad. Puede pasar al bar y tomar alcohol.")
}

if (edad%2 != 0){
    console.log('¿Sabias que tu edad es impar?')
}




/* Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar. */
let vehiculo = prompt('Tipo de vehiculo: ');
let litrosConsumidos = parseInt(prompt('Litros consumidos: '));

const totalAPagar = (vehiculo, litrosConsumidos) => {
    let precioToal = litrosConsumidos

    switch(vehiculo){
        case 'coche':
            litrosConsumidos *= 86
            break
        case 'moto':
            litrosConsumidos *= 70
            break
        case 'autobus':
            litrosConsumidos *= 55
            break
    }
    
    if (precioToal >= 0 && precioToal<=25 ){
        litrosConsumidos += 50;
    }else {
        litrosConsumidos += 25
    }

    return litrosConsumidos
}

let aPagar = totalAPagar(vehiculo, litrosConsumidos)
console.log(aPagar)




const localSandwiches = (sandwichBase, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let totalSandwich = 0;

    switch (sandwichBase){
        case 'pollo':
            totalSandwich += 150;
            break;
        
        case 'carne':
            totalSandwich += 200;
            break;
        
        case 'veggie':
            totalSandwich += 100;
            break;
    }

    switch (pan) {
        case 'blanco':
            totalSandwich += 50;
            break;
        
        case 'negro':
            totalSandwich += 60;
            break;
        
        case 's/gluten':
            totalSandwich += 75;
            break;
    }

    queso == true ? totalSandwich += 20 : totalSandwich = totalSandwich;
    tomate == true ? totalSandwich += 15 : totalSandwich = totalSandwich;
    lechuga == true ? totalSandwich += 10 : totalSandwich = totalSandwich;
    cebolla == true ? totalSandwich += 15 : totalSandwich = totalSandwich;
    mayonesa == true ? totalSandwich += 5 : totalSandwich = totalSandwich;
    mostaza == true ? totalSandwich += 5 : totalSandwich = totalSandwich;


    return totalSandwich;
}

let sandwichBase = prompt('Que sandwich base quiere? ');
let tipoPan = prompt('Que tipo de pan quiere? ');
/* let queso = prompt('Quiere queso? ');
let tomate = prompt('Quiere queso? ');
let sandwichBase = prompt('Quiere queso? ');
let tipoPan = prompt('Quiere queso? ');
let sandwichBase = prompt('Quiere queso? ');
let tipoPan = prompt('Quiere queso? '); */

let sandwich = localSandwiches(sandwichBase, tipoPan, true, false, true, false, true);
console.log(sandwich);
