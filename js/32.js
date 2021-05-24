// Async / await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando cliente... espere...');

        setTimeout(() => {
            resolve('Los Clientes fueron Descargados');
        }, 5000); // Tiempo de espera en milisegundos
    })
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000); // Tiempo de espera en milisegundos
    })
}

async function app() {
    /* Manera incorrecta de resolver por perdida de performance
       Ya que se espera que termine una para iniciar el otro llamado
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        const pedidos = await descargarUltimosPedidos();
        console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
    */

    //Manera correcta de resolver llamados multiples async 
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

