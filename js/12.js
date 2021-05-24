"use strict"; //Corre JS en modo stricto - Esto es que no se permiten malas practicas como cambiar un objeto freeze

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

//FREEZE
Object.freeze(producto); //Congela el objeto y no permite agregar, quitar o modificar los elementos del mismo

// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
producto.imagen = 'imagen.jgp'

// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
delete producto.precio;

console.log(producto);

//SEAL
Object.seal(producto); //Congela el objeto y no permite agregar O quitar PERO SI modificar los elementos del mismo

// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
producto.imagen = 'imagen.jgp'

// AGREGAR O QUITAR ELEMENTOS DEL OBJETO
delete producto.precio;

// MODIFICAR UN ELEMENTO
producto.precio = 'PRECIO NUEVO'

console.log(producto);