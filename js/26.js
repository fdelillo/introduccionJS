// THIS

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();

// IMPORTANTE //
/* Si utilizamos THIS con un arrow function no esta
haciendo referencia al objeto en si, sino a la 
ventana global (el objeto windows).
*/

//ESTE CODIGO DA ERROR DE UNDEFINE
//PORQUE LA VARIABLE NOMBRE NO ESTA DEFINIDA GLOBALMENTE
const reservacion2 = {
    nombre: 'Juan',
    informacion: () => {
        console.log(`El cliente ${this.nombre} reservo`)
    }
}
reservacion2.informacion();

// CODIGO CORRECTO SERIA
window.nombre = 'El Nombre es Juan'

const reservacion3 = {
    nombre: 'Juan',
    informacion: () => {
        console.log(`El cliente ${this.nombre} reservo`)
    }
}
reservacion3.informacion();