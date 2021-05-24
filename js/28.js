// CLASES

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

class Libro extends Producto {
    constructor(nombre,precio,isbn) {
        super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('y si hay en existencia');
    }
}

const producto2 = new Producto('Monitor curvo 49"', 800);
const producto3 = new Producto('Laptop', 700);
const libro = new Libro('JavaScript la Revolucion', 120, '9236598631154')

console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.obtenerPrecio());