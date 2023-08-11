//if
let clima = 'soleado';
let dia = 'martes';

if(clima == 'soleado' && dia == 'domingo'){

    console.log('Lindo dia para pasear');

}else if (clima == 'soleado' && dia == 'lunes'){

    console.log('Podria salir igual');

}else{
    console.log('Mejor me quedo en casa')
}



//if ternario
//variable = condicion ? expresion para el true : espresion para el false;
let fruta = 'Manzana';
let resultadoFruta = fruta == 'Manzana'?'Me gustan las manzanas' : 'Queria manzana';
console.log(resultadoFruta)



//Switch
let semaforo = 'Amarillo';

switch (semaforo){
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaución');
        break;
    case 'Rojo':
        console.log('No cruces');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}


//CLASE
const determinarPermiso = (rolUsuario) => {
    if(rolUsuario === 'superAdmin'){
        return 'Tiene permiso a todo'
    }else if(rolUsuario === 'admin'){
        return 'Tiene permiso casi completo'
    }else if(rolUsuario === 'user'){
        return 'Tiene permiso a muy poco'
    }else {
        return 'El rol no existe. No tienes acceso'
    }
}

let permisos = determinarPermiso('admin')
console.log(permisos)



const llevoParaguas = (clima) => {
    return clima === 'lluvioso' ? 'si, llevalo' : 'no, no hace falta'
}

let paraguas = llevoParaguas('lluvioso')
console.log(paraguas)




const determinarImpuesto = (marcaAuto) => {

    let impuesto = 100

    switch(marcaAuto){
        case 'audi':
            //impuesto = impuesto + 10
            impuesto += 10
            break
            //Si ponemos retrun dentro de los case no es necesario poner break

        case 'citroen': //El citroen al no tener bloque de codigo se encadena con el case de VW, eso quiere decir que los dos tienen impuesto de 30. Es como si fuera un OR 
        case 'VW':
            impuesto += 30
            break

        default:
            impuesto = 0

        
    }

    return impuesto > 0 ? impuesto : 'Su auto esta excento de impuesto'
}

let impuestoCoche = determinarImpuesto('VW')
console.log(impuestoCoche)


const determinarIngreso = (edad, siTieneTicket) => {
    return edad > 18 && siTieneTicket === true ? 'si puede pasar' : 'no puede pasar'
}