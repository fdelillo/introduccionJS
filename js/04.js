//String o cadena de textos

// Manera mas utilizada de de crear una cade String
const producto = "Monitor de 20 pulgadas"; //Se pueden usar comillas dobles
const producto2 = 'Monitor de 20 pulgadas'; //Se pueden usar comillas simples
const producto3 = "Monitor de 20 \""; //Cuando en un String tengo que utilizar comillas dobles como parte del texto se anulan con la barra \
const producto4 = 'Monitor de 20 "'; // Otra opcion es cambiar a comillas simples y en el texto como valor usar comilas dobles

// Otras opciones menos utilizadas - IMPORTANTE el tipo de dato es String con la S mayuscula
const producto5 = String("Monitor de 30 pulgadas"); // Crear String con constructor
const producto6 = new String("Monitor de 40 pulgadas"); //Crear objeto String

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);

//Para saber el tipo de dato de una Variable o Constante
console.log(typeof producto);
console.log(typeof producto5);
console.log(typeof producto6);

/* METODOS Y PROPIEDADES */
const tweet = 'Aprendiendo desarrollo web completo con el curso de Udemy';
const producto7 = 'Monitor HD';
const email = 'correo@correo.com';

// Length es para conocer la extension de una cadena de texto, retorma el valor numerico de la cantidad de caracteres
console.log(tweet.length);
console.log(producto7.length);

// IndexOf es para conocer la existencia de una cadena de texto dentro de otra, si existe devuelve la posicion del primer valor, sino existe retorna -1
console.log(tweet.indexOf("desarrollo"));
console.log(producto7.indexOf("tablet"));
console.log(email.indexOf("@"));

// Includes retorna true o false si la cadena buscada existe
console.log(tweet.includes("@"));
console.log(email.includes("@"));