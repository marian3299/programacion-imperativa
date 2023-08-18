/* Crear la estructura adecuada para guardar las siguientes películas: "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
 */
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];
console.log(peliculas);


/* Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees 
una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.*/
const convertirAMayuscula = arr => {
    for(i=0; i<arr.length; i++){
       arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

convertirAMayuscula(peliculas);
console.log(peliculas);



/* Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del 
primero, y así retornar un solo array con todas las películas como sus elementos.
*/
let peliculasAnimadas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

const agregarElementos = (arr1,arr2) => {
    let longitud = arr2.length;

    for(i=0; i<longitud; i++){
        let eliminado = arr2.shift();

        if(eliminado != 'fortnite'){
            arr1.push(eliminado);
        }
        
    }
    convertirAMayuscula(arr1);
    return arr1;
}

console.log(agregarElementos(peliculas, peliculasAnimadas));
/* Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego.
 Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
*/



/* 
Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

*/
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

const compararScore = (scores1, scores2) => {
    let resultadoComparacion = [];

    for(i=0; i<scores1.length; i++){
        if(scores1[i] == scores2[i]){
            resultadoComparacion[i] = 'Calificaciones Iguales';
        }else{
            resultadoComparacion[i] = 'Calificaciones Diferentes';
        }
    }

    return resultadoComparacion;
}

console.log(compararScore(asiaScores, euroScores));




/* En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos.  */
const sumaArray = arr => {
    let suma = 0;

    for(i=0; i<arr.length; i++){
        suma += arr[i];
    }

    return suma;
}

let numerosSuma = [10,3,10];
console.log(sumaArray(numerosSuma));



/* En este ejercicio deberás crear una función llamada join() que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join(). */
const join = arr => {
    let palabra = arr.shift();
    let longitud = arr.length;

    for(i=0; i < longitud; i++){
        let letra = arr.shift();
        palabra += letra;
    }

    return palabra;
}

let letras = ['c','h','a','u'];
console.log(join(letras));