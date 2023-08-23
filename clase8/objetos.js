//Objeto: guardar un elemento y ponerle muchas caracteristicas
//calve : valor
const perro = {
    nombre: 'jack',
    edad: 2,
    raza: 'callejero',
    ladrar: function(){
        return 'Wouf y me llamo ' + this.nombre;
    } //Esto es un metodo, porque esta ligado a un objeto
}

console.log(perro);
console.log(perro['nombre']); //Acceder al valor de la clabe nombre del objeto (BRACKET NOTATION)

//DOT NOTATION 
console.log(perro.nombre); //Otra forma de imprimir valores de las claves

let x = perro.ladrar();
console.log(x);


//MANIPULACION DE OBJETOS
perro.edad = 3; //Cambiar valores de un objeto
console.log(perro);

delete perro.raza //Elminar propiedades
console.log(perro);

perro.tamanio = 'grande' //Agregar elementos al objeto
console.log(perro);


const productos = [
    {
        nomre: 'celular',
        precio: 2, 
        stock: 5
    },
    {
        nomre: 'tablet',
        precio: 3, 
        stock: 4
    },
    {
        nomre: 'tv',
        precio: 2, 
        stock: 12
    },
]

const verProductos = () => {
    for(let i = 0; i < productos.length; i++){
        //console.log(productos[i]);
        productos[i].stock += 10;//Agregarle 10 a cada stock
    }
}

verProductos()
console.log(productos)


let promediarFn = function(){
    let suma = 0;
    for(let i = 0; i < this.notas.length; i++){
        suma += this.notas[i];
    }

    return suma/this.notas.length;
}

let estudiantes = [
    {
        nombre: 'Pepe',
        edad: 22,
        notas: [9, 10, 10],
        promediar: promediarFn
    },

    {
        nombre: 'Maria',
        edad: 23,
        notas: [9, 10, 9],
        promediar: promediarFn
    },
]

const imprimirPromediosDeEstudiantes = () => {
    for(i = 0; i<estudiantes.length; i++){
        console.log(`El promedio de ${estudiantes[i].nombre} es ${estudiantes[i].promediar()}`);
    }
}

imprimirPromediosDeEstudiantes();
