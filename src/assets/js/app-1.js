/*
* Conectar archivo javascript al html de destino
* A partir del precio de un producto y el IVA correspondiente, imprimir el precio total en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el texto
* * acceder al contenedor desde javascript
* * recoger los valores de precio e IVA suministrados por el usuario
* * comprobacion básica de si los valores proporcionados son números y, en caso negativo, convertirlos
* * calcular el importe del IVA a partir del precio y de la tasa de IVA
* * calcular el precio total, sumando el importe del IVA al precio del producto
* * componer el texto a mostrar
* * insertar en el contenedor
* * imprimirlo en pantalla
*/

function calcularIva(precio, iva) {
    const importeIva = precio * iva / 100;
    return importeIva;
}

function calcularPrecio(precio, iva) {
    const precioTotal = precio + calcularIva(precio, iva);
    return precioTotal;
}

function volverNumero(numero) {
    if(!isNaN(numero)){
        numero = Number(numero);
    }
    return numero;
}

function mostrarPrecioTotal() {
    let precioUsuario = document.getElementById('precioBase').value;
    precioUsuario = volverNumero(precioUsuario);
    let ivaUsuario = document.getElementById('porcentajeIva').value;
    ivaUsuario = volverNumero(ivaUsuario);
    const ivaCalculado = calcularIva(precioUsuario, ivaUsuario);
    const precioTotal = calcularPrecio(precioUsuario, ivaCalculado);
    const mensajeTxt = document.getElementById("ejercicioIva");
    mensajeTxt.innerHTML = `Precio del producto: ${precioUsuario}, importe del IVA: ${ivaUsuario}%, <strong>precio total: ${precioTotal}</strong>`;
}