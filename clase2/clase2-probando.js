const prompt = require("prompt-sync")({sigint:true});
console.log('Hola mundo');

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola ${nombre}!!!`)