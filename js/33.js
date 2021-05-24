function obtenerEmpleados() {
    const archivo = 'empleado.json'
    
    // Promises
    /*fetch(archivo)
        .then (resultado => resultado.json())
        .then (datos => {
            const {empleado} = datos;
            console.log(empleado);
        });*/

    // Async / Await
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();