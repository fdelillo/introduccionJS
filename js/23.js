// ESTRUCTURAS DE CONTROL SWITCH

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque, vamos arevisar los fondos');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
}