//FUNCIONES

// Declaracion de funciones
function sumar() {
    console.log(10 + 10);
}

sumar();

// Expresion de la funcion
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

// IIFE -- Son funciones que se llaman a si mismas
// TIENEN MUCHA UTILIDAD PARA PROTEGER QUE LAS VARIABLES Y FUNCIONES NO PUEDAN SER ACCEDIDAS POR OTROS ARCHIVOS
(function() {
    console.log('Esto es una funcion');
})();

/* IMPORTANTE */
/*
JS al momento de ejecutarse lo hace en 2 etapas
- primero busca la declaracion de todas las funciones y luego el resto del codigo
por lo tanto utilizando el metodo de declaracion de funcion podriamos por ejemplo 
ejecutar el llamado a una funcion y luego el codigo de la misma
Ejemplo

sumar();
function sumar() {
    console.log(10 + 10);
}

En caso contrario utilizando el metodo "Expresion de funcion" dara error porque 
la forma de declararse es considerado como una variable 
*/