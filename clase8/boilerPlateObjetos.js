//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

/* 1. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado. */

/* 2. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”. */

/* 3. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”. */

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function(titular){
    for(i = 0; i < this.clientes.length; i++){
      if(this.clientes[i].titularCuenta === titular){
        console.log(this.clientes[i]);
      }
    }
  },

  deposito: function(titular,deposito){
    for(i = 0; i < this.clientes.length; i++){
      if(this.clientes[i].titularCuenta === titular){
        this.clientes[i].saldoEnPesos += deposito;
        console.log(`Deposito realizado, su nuevo saldo es ${this.clientes[i].saldoEnPesos}`);
      }
    }

  },

  extraccion: function(titular, retiro){
    
    for(i = 0; i < this.clientes.length; i++){
      if(this.clientes[i].titularCuenta === titular){
        let saldo = this.clientes[i].saldoEnPesos;
        saldo -= retiro;

        if(saldo < 0){
          console.log('Fondos insuficientes');
          return
        }else{
          console.log(`Extraccion realizada correctamente, su nuevo saldo es: ${saldo}`);
          return
        }
      }
    }
  }
}

banco.consultarCliente('Ansel Ardley');
banco.deposito('Jacki Shurmer', 500);
banco.extraccion('Jacki Shurmer', 1000);



/* Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */
let alumno = {
  nombre: 'Mariana',
  numeroLegajo: 3828,
  notas: [6,5,10],
  promedio: function(){
    let suma = 0;
    for(i=0; i<this.notas.length; i++){
      suma += this.notas[i]
    }

    let promedio = suma/this.notas.length;

    if(promedio >= 6){
      return `Aprobado. El promedio de ${this.nombre} es: ${promedio}`
    }

    if(promedio < 6){
      return `Reprobado. El promedio de ${this.nombre} es: ${promedio}`
    }

    
  }
}

let x = alumno.promedio();
console.log(x);


/* Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string. */
let array = [{nombre: 'Lean', edad:27}, {nombre: 'Eze', edad:49}];

const propiedadUnica = (arr,strg) => {
  let newArr = [];
  for(i=0; i<arr.length; i++){
    let newObject = {}; 
    newObject[strg] = arr[i][strg];
    newArr.push(newObject);
  }

  return newArr;
} 


//console.log(array[0]['nombre'])
let y = propiedadUnica(array,'edad');
console.log(y);
