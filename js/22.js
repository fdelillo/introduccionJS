// ESTRUCTURAS DE CONTROL IF-ELSE / ELSE-IF

const puntaje = 1001;

if (puntaje === 1000) { //los 3 signos igual comparan valor y tipo de dato
    console.log('El puntaje es igual')
}
else {
    console.log('El puntaje NO es igual')
}

/* */
const efectivo = 1001;
const carrito = 500;

if (efectivo > carrito) { //los 3 signos igual comparan valor y tipo de dato
    console.log('El cliente puede pagar')
}
else {
    console.log('El cliente NO puede pagar')
}

// ESTRUCTURAS ANIDADAS
const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') { //los 3 signos igual comparan valor y tipo de dato
    console.log('Eres Adminitrador, puedes acceder')
}
else if (rol === 'EDITOR') {
    console.log('Eres Editor, puedes acceder')
}
else {
    console.log('No tienes acceso')
}