/*
* Conectar archivo javascript al html de destino
* A partir del precio de un producto y el IVA correspondiente, imprimir el precio total en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el texto
* * acceder al contenedor desde javascript
* * asignar los valores de precio y porcentaje de IVA
* * calcular el importe del IVA a partir del precio y de la tasa de IVA
* * calcular el precio total, sumando el importe del IVA al precio del producto
* * componer el texto a mostrar
* * insertar en el contenedor
* * imprimirlo en pantalla
*/

const precioBase = 125;
const porcentajeIva = 21;

function calcularIva(precio, iva) {
    const importeIva = precio * iva / 100;
    return importeIva;
}

function calcularPrecio() {
    const precioTotal = precioBase + calcularIva(precioBase, porcentajeIva);
    return precioTotal;
}

function mostrarPrecio() {
    const precioFinal = calcularPrecio();
    const mensajeTxt = document.getElementById("ejercicioIva");
    mensajeTxt.innerHTML = `Precio del producto: ${precioBase}, porcentaje de IVA: ${porcentajeIva}%, <strong>precio total: ${precioFinal}</strong>`;
}

mostrarPrecio();