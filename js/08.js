const nombre = 'Federico';
const email = 'federicodelillo@gmail.com';

console.log(nombre);
console.log(email);

// Concatenacion
console.log(nombre + email);

console.log(nombre + " " + email);
console.log("Cliente; " + nombre + " Email: " + email);
console.log("Cliente; " , nombre , " Email: " , email);

// Tamplate String - String LIterals
// ${} asignacion de variables y/o funciones
console.log(`Nombre cliente: ${nombre} Email: ${email}`);