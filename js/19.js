// FUNCIONES CON RETORNO

// Declaracion de funciones
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = sumar(2 ,3);

console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(100);
total = agregarCarrito(1000);
total = agregarCarrito(500);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es: $${totalAPagar}`);