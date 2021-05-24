// OBJETOS

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

//ASIGNACION DE VALOR A UNA VARIABLE
//FORMA ANTERIOR
const nombreProducto1 = producto.nombreProducto;
const precio1 = producto.precio;
const disponible1 = producto.disponible;

console.log(nombreProducto1);
console.log(precio1);
console.log(disponible1);

//FORMA NUEVA - destructuring
const {precio, nombreProducto, disponible} = producto

console.log(nombreProducto);
console.log(precio);
console.log(disponible);