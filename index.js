function saludarUsuario () {
  const nombre = prompt('Ingresa tu Nombre y Apellido');
  alert ('Bienvenido '+nombre);
}

saludarUsuario();

function calcularPrecioConDescuento() {
  let precioProducto = parseInt(prompt("Ingrese el precio del producto:"));
  let descuento = 0;

  if (precioProducto > 100) {
    descuento = 20;
  } 
  else if (precioProducto > 50) {
    descuento = 10;
  } 
  else {
    descuento = 0;
  }

  let precioConDescuento = precioProducto - (precioProducto * (descuento / 100));

  alert("Precio con descuento: $" + precioConDescuento);
}

calcularPrecioConDescuento();



/* Le pido al usuario que ingrese el precio de su precio.
Lo parseo utilizando el parseFloat y determino que si el precio
es mayor a 100 le hago un descuento del 20%, y si el precio
mayor que 50 pero menor que 100 el descuento es del 10%. 
si el precio que ingreso es menor que 50, no tiene ningun  descuento.
Y al final, calculo el precio con descuento declarando que la variable
precioConDescuento sea igual al resultado de precioProducto * el descuento y
y se divide por 100 para obtener el valor correspondiente al porcentaje del precio.
*/

function calcularIvaTotal(){
let precioTotal = parseInt(prompt('Ingrese el Total de su Compra'));
const totalIVA = 1.21;

for (let i = 0; i < precioTotal; i++) {
  const precioConIva = precioTotal * totalIVA;
  alert('El total con el IVA es de: ' +precioConIva);
  break
}
}

calcularIvaTotal();

/*Para calcular el IVA encerre todo dentro de una funcion.
Le solicito al usuario que coloque el monto total
y a ese monto que ingreso el usuario le multiplico el monto del IVA y por
alert muestro el total del precio. 
Use el break  para detener el ciclo  después de realizar el cálculo */







