//METODOS DE PROPIEDAD

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo una cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

//Agregando un metodo por fuera del objeto
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando cancion con el ID: ${id}`)
}

console.log(reproductor);

reproductor.reproducir(3484);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Rock Nacional');
reproductor.reproducirPlayList('Rock Nacional');