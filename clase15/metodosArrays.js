//CALLBACKS --> una funcion que se pasa como argumnto a otra funcion  
//Todos estos metodos lo que hacen es recorrer un arreglo

//FILTER: retorna un nuevo arreglo con todos los elementos que cumplan la condicion
//Me pide que en cada vuelta retorne una condicion
//Si necesitamos el iterator (i), lo podemos poner como segundo argumento de la funcion 
//EL PRIMER PARAMETRO SIEMPRE HACE REFERENCIA AL ELEMENTO Y EL SEGUNDO AL INDICE
let arrayFiltrado = libros.filter((libro) =>  libro.paginas > 300)  //El argumento de la funcion es cada elemento al que va a acceder dentro de nuestro array, por eso se pone en sigular

let edades = [22, 8, 17, 14, 30];
let mayores = edades.filter((edad) => edad > 18);
console.log(mayores);


//MAP
//Devuelve un nuevo arreglo de la misma longitud que el original
//Me pide que le diga que agregar en cada vuelta. Por ejemplo: agregar un id a cada objeto de mi array, pero hace un nuevo arreglo
let arrayMapeado = libros.map((libro) => {
    //return {nombre: libro.nombre, autor: libro.autor, paginas: libro.paginas, id: i+1};
    return {...libro, id: i + 1} //Los tres puntitos indican que va a agregar al nuevo array todo lo que habia en el array anterior.
})

const numeros = [2, 4, 6];
const numerosMultiplicados = numeros.map((num) => num*2);
console.log(numerosMultiplicados);


//FIND 
//Devuelve el elemeto que cumpla la condicion
//Si hay mas de un elemento que cumpla la condicion devuelve el primero que encuentra
//Si no encuentra el elemento devuelve undefined 
let libroEncontrado = libros.find((libro) => libro.nombre === 'operacionMasacre')


//REDUCE 
//Devuelve un unico valor 
//Recibe cuatro argumentos: acumulador, elemento actual, indice actual y array
let nums = [5, 7, 16];
let suma = nums.reduce((acum, num) => acum + num);
console.log(suma);


//FOR EACH
//La finalidad de este metodo es iterar sobre un array
//No retorna nada
let paises = ['Argentina', 'Cuba', 'Peru'];
paises.forEach((pais) => console.log(pais));
    
