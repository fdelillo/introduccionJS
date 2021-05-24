// ARREGLOS O ARRAYS

const numero = [10,20,30,40,50];


console.log(numero);
console.table(numero);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.log(meses);
console.table(meses);

const arreglo = ["Hola", 10, 'Si', null, {nombre: 'Juan', trabajo: "Programador"}, [1,2,3]];

console.log(arreglo);
console.table(arreglo);

// Como acceder a los valores de un arreglo
console.log(numero[4]);
console.log(numero[2]);
console.log(numero[200]);
console.log(arreglo[0]);

// tamaño de un arreglo
console.log(meses.length);

//Iteracion - Se va a explicar mas adelante
numero.forEach( function(numero) {
    console.log(numero);
});


// AGREGAR ELEMENTOS A UN ARREGLO
numero[5] = 60; // Se agrega un elemento manualmente al final del arreglo conociendo cual es su ultima posicion
numero[6] = 70; // Se agrega un elemento manualmente al final del arreglo conociendo cual es su ultima posicion
console.table(numero);

// La forma correcta de resolverlo es con el metodo push
//push agrega al final del arreglo
numero.push(80);
numero.push(90,100);
console.table(numero);

//unshift agrega al principio del arreglo
numero.push(0);
numero.push(1,2,3);
console.table(numero);

// QUITAR ELEMENTOS A UN ARREGLO
meses.pop(); //Elimina el primer elemento
meses.shift(); //Elimina el el ultimo elemento
console.log(meses);

meses.splice(1,1); // tiene como parametros 2 valores - el primero es el inicio y el segundo la cantidad de posiciones a eliminar
console.log(meses);

// HOY COMO BUENA PRACTICA SE ACONSEJA COPIAR EL ARREGLO Y ASI NO MODIFICAR EL ORIGINAL
//UTILIZAMOS Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'] //copio y modifico agregando al final (seria una reversion del push con mas codigo pero mejor practica)
console.table(nuevoArreglo)

const nuevoArreglo1 = [ 'Enero',...meses] //copio y modifico agregando al final (seria una reversion del unshift con mas codigo pero mejor practica)
console.table(nuevoArreglo1)