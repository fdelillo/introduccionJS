// OBJETOS

const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

console.log(producto);

// ACCESO a los datos del objeto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma de acceder a los datos del objeto
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);


// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
producto.imagen = 'imagen.jgp'

// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
delete producto.precio;

console.log(producto);