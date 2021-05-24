// POO programacion orientada a objetos

// JS utiliza proto type

//objet literal
const producto = {
    nombre: 'Celular',
    precio: 500
}

// Objet Constructor
function Cliente(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
// PROTOTYPE VA A CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO EN ESPEDIFICO
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre}  ${this.apellido}`
}

// Objet Constructor
function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// PROTOTYPE VA A CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO EN ESPEDIFICO
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

const producto2 = new Producto('Monitor curvo 49"', 800);
const producto3 = new Producto('Laptop', 700);
const cliente = new Cliente('Federico','De Lillo')

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

