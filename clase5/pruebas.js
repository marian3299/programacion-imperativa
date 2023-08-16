const prompt = require("prompt-sync")({sigint:true});

function tablaDeMultiplicar(numero) {
	let i = 0;
 	while(i <= 10){
		let multiplicacion = numero*i;
		console.log(`${numero} * ${i} = ${multiplicacion}`);
		i++;

	}
}

tablaDeMultiplicar(10)