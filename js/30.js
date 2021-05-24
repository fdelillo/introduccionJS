// PROMISES

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    
    if(auth) {
        resolve('Usuario Autenticado') // EL PROMISE SE CUMPLE
    } else {
        reject('No se puedo iniciar sesion') // EL PROMISE NO SE CUMPLE
    }
})

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

/* En lo promises existen 3 estados posibles
1- Pending: No se ha cumplido pero tampoco rechazado
2- Fulfilled: Ya se cumplio
3- Rejected: Se ha rechazado o no se pudo cumplir
*/