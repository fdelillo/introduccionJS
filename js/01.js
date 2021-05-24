// VARIABLES

var producto ='Audifonos Gamer'; //Iniciar variable y asignarle valor
var disponible; // variable creada sin valor

/* JavaScript es de tipo dinamico, esto quiere decir que se puede cambiar 
 el tipo de dato de una variable */

 // por ejemplo ahora puedo asignarle un valor true a la variable producto
 producto = true; //O sea la variable producto que fue creada como string ahora es booleana

// Crear multiples variables con solo una declaracion VAR
var producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'computadora';

 //Sintaxis de variables erroneas / no pueden iniciar con numeros o guion medio
//  var 1disponible = true; 
//  var -disponible = true;
var _disponible = true; // guion bajo es valido

//Estilos para las variables o convencion
var nombre_producto = 'Monitor HD'; // underscore
var nombreProducto = 'Monitor HD'; // camelCase
var Nombre_producto = 'Monitor HD'; // pascal Case -- se utiliza mas para las clases
var nombreproducto = 'Monitor HD'; // lowercase

// IMPORTANTE JAVASCRIPT ES CASE SENSITIVE
// Esto es que en el nombre de las variables no es lo mismo producto que PRODUCTO