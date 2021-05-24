// PARAMETROS Y ARGUMENTOS

// Declaracion de funciones
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar(10,10);
sumar(1,15);
sumar(2,1);
sumar(5,8);

// Expresion de la funcion
const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}

sumar2(10,10);
sumar2(1,15);
sumar2(2,1);
sumar2(5,8);

// Declaracion de funciones con parametros por defoult
// Esto es que si una funcion es llamada y no recibe todos sus argumentos
// toma el valor por defecto para no dar error
function sumar(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

sumar(10);
sumar(0);