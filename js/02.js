// VARIABLES LET nueva forma de declarar que es una variable, por defecto todas son LET
// Mantiene las mismas reglas que VAR

let producto ='Audifonos Gamer'; //Iniciar variable y asignarle valor
let disponible; // variable creada sin valor

/* JavaScript es de tipo dinamico, esto quiere decir que se puede cambiar 
 el tipo de dato de una variable */

 // por ejemplo ahora puedo asignarle un valor true a la variable producto
 producto = true; //O sea la variable producto que fue creada como string ahora es booleana

// Crear multiples variables con solo una declaracion VAR
let producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'computadora';

 //Sintaxis de variables erroneas / no pueden iniciar con numeros o guion medio
//  var 1disponible = true; 
//  var -disponible = true;
let _disponible = true; // guion bajo es valido

//Estilos para las variables o convencion
let nombre_producto = 'Monitor HD'; // underscore
let nombreProducto = 'Monitor HD'; // camelCase
let Nombre_producto = 'Monitor HD'; // pascal Case -- se utiliza mas para las clases
let nombreproducto = 'Monitor HD'; // lowercase

// IMPORTANTE JAVASCRIPT ES CASE SENSITIVE
// Esto es que en el nombre de las variables no es lo mismo producto que PRODUCTO