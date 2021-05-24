// ESTRUCTURAS DE REPETICION O ITERADORES

// for loop
//for (varible de iteracion; condicion; incremento)
for (let i =0; i < 10; i++) {
    console.log(`El valor es ${i}`);
}

for (let i =1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(`El valor es ${i}, es PAR`);
    } else {
        console.log(`El valor es ${i}, es IMPAR`);
    }
}

const carrito = [
    {nombre: 'Monitor 20"', precio: 500},
    {nombre: 'Televisor 43"', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audiculares', precio: 50},
    {nombre: 'Celular', precio: 250},
    {nombre: 'Laptop', precio: 800},
];

for (let i=0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

for (let i=0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// while loop
let i=0; //indice
while (i < 10) {//condicion
    console.log(`El valor es ${i}`);
    i++; //Incremento
}

i=0; //indice
while (i < 10) {//condicion
    if(i % 2 === 0){
        console.log(`El valor es ${i}, es PAR`);
    } else {
        console.log(`El valor es ${i}, es IMPAR`);
    };
    i++; //Incremento
}

i=0; //indice
while (i < carrito.length) {//condicion
    console.log(carrito[i].nombre);
    i++; //Incremento
}

//do while loop
i=0;
do {
    console.log(i);
    i++;
} while(i < 10)
