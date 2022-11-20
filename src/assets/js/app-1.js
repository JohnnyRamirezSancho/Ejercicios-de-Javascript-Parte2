/*
* Conectar archivo javascript al html de destino
* A partir del precio de un producto y el IVA correspondiente, imprimir el precio total en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el texto
* * acceder al contenedor desde javascript
* * recoger los valores de precio e IVA suministrados por el usuario
* * calcular el importe del IVA a partir del precio y de la tasa de IVA
* * calcular el precio total, sumando el importe del IVA al precio del producto
* * componer el texto a mostrar
* * insertar en el contenedor
* * imprimirlo en pantalla
*/

function calcularIva(precio, iva) {
    let precioBase = precio;
    let ivaBase = iva;
    let importeIva = precioBase * ivaBase / 100;
    return importeIva;
}

function calcularPrecio(precio, iva) {
    let precioCalculado = precio;
    let ivaCalculado = iva;
    let precioTotal = precioCalculado + ivaCalculado;
    return precioTotal;
}

function mostrarPrecioTotal() {
    let precioUsuario = document.getElementById('precioBase').value;
    let ivaUsuario = document.getElementById('porcentajeIva').value;
    let ivaCalculado = calcularIva(precioUsuario, ivaUsuario);
    let precioTotal = calcularPrecio(precioUsuario, ivaCalculado);
    let mensajeTxt = document.getElementById("ejercicioIva");
    mensajeTxt.innerHTML = `Precio del producto: ${precioUsuario}, importe del IVA: ${ivaUsuario}%, <strong>precio total: ${precioTotal}</strong>`;
}