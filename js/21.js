// ARROW FUNCTION O FUNCIONES FLECHAS

// Expresion de la funcion

const sumar = (n1,n2) => {
    console.log(n1 + n2);
}
// Cuando el codigo de la funcion es una linea las llaves son opcionales
const sumar1 = (n1,n2) => console.log(n1 + n2);

sumar(5, 10);
sumar1(5, 10);


// Cuando el parametro es unico son opcionales lo parentesis
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');


/**********/
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
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
});


const resultado2 = carrito.some(producto => producto.nombre === 'Celular PRO');
console.log(resultado2);

// Reduce
const resultado4 = carrito.reduce ((total, producto) => total + producto.precio, 0);
console.log(resultado4);

// Filter
const resultado6 = carrito.filter (producto => producto.precio > 400);
console.log(resultado6);

const resultado7 = carrito.filter (producto => producto.nombre !== 'Celular');
console.log(resultado7);