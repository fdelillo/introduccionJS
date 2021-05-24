//UNIFICAR 2 OBJETOS

const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//SE UTILIZA ESTE METODO COMO BUENA PRACTICA PARA NO TOCAR LOS OBJETOS ORIGINALES

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);