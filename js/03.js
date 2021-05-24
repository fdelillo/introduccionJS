// VARIABLES CONST

const producto = 'Audifonos Gamer'; //Iniciar variable y asignarle valor
const disponible; // NO SE PUEDE CREAR UNA VARIABLE CONST SIN INICIALIZAR

//NO SE PERMITE REASIGNAR EL TIPO DE VALOR A UNA CONST (Es logico pues los valores son constantes)
// const producto = true;

// Crear multiples variables con solo una declaracion VAR
const producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'computadora';

 //Sintaxis de variables erroneas / no pueden iniciar con numeros o guion medio
//  var 1disponible = true; 
//  var -disponible = true;
const _disponible = true; // guion bajo es valido

//Estilos para las variables o convencion
const nombre_producto = 'Monitor HD'; // underscore
const nombreProducto = 'Monitor HD'; // camelCase
const Nombre_producto = 'Monitor HD'; // pascal Case -- se utiliza mas para las clases
const nombreproducto = 'Monitor HD'; // lowercase

// IMPORTANTE JAVASCRIPT ES CASE SENSITIVE
// Esto es que en el nombre de las variables no es lo mismo producto que PRODUCTO