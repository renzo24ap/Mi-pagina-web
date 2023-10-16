// Ejemplo de lista de productos
const productos = [
    { nombre: 'Café Espresso', precio: 2.50 },
    { nombre: 'Café Latte', precio: 3.00 },
    { nombre: 'Café Mocha', precio: 3.50 },
];

function mostrarProductos() {
    const listaProductos = document.querySelector('#lista-productos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaProductos.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});
