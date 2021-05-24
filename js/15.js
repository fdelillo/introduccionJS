// MAS METODOS CON ARREGLOS

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    {nombre: 'Monitor 20"', precio: 500},
    {nombre: 'Televisor 43"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audiculares', precio: 50},
    {nombre: 'Celular', precio: 250},
    {nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});

// Includes - Se puede utilizar solo en para arreglos planos
const resultado = meses.includes('Diciembre');
console.log(resultado);

// Some para arreglos con objetos
const resultado2 = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
})
console.log(resultado2);

// Some para arreglos con objetos con arrayFunction
const resultado3 = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado3);

// Reduce
const resultado4 = carrito.reduce (function(total, producto) {
    return total + producto.precio
}, 0)
console.log(resultado4);

// Reduce con arrayFunction
const resultado5 = carrito.reduce ((total, producto) => total + producto.precio, 0)
console.log(resultado5);

// Filter
const resultado6 = carrito.filter (function(producto) {
    return producto.precio > 400
})
console.log(resultado6);

// Filter con arrayFunction
const resultado7 = carrito.filter ((producto) => producto.precio > 400)
console.log(resultado7);