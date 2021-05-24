// FOR EACH Y MAP
// Son metodos exclusivos para arreglos


const carrito = [
    {nombre: 'Monitor 20"', precio: 500},
    {nombre: 'Televisor 43"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audiculares', precio: 50},
    {nombre: 'Celular', precio: 250},
    {nombre: 'Laptop', precio: 800},
];

carrito.forEach(function () {
    console.log(carrito);
})

carrito.forEach(function (producto) {
    console.log(producto);
})

// FOR EACH
// Utilizarlo mejor para cuando se requiera mostrar cosas en pantalla
carrito.forEach(producto => console.log(producto));


// map
carrito.map(producto => console.log(producto));

// MAP TE CREA UN NUEVO ARREGLO 
// Entonces la mejor pratica seria

const produto2 = carrito.map(producto => producto.nombre);