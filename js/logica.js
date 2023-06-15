

//   function filtrarPorPrecio(precio) {
//       const filtrados = notebooks.filter((note) => note.precio <= precio);
//       return filtrados;
//  }



//  let precioMinimo = parseFloat(prompt('Ingresa el valor minimo que desee buscar / 0-para salir'));



//   while (precioMinimo != 0) {
//       if (isNaN(precioMinimo)) {
//           alert('Ingrese datos validos');
//       } else {
//           const noteFiltrados = filtrarPorPrecio(precioMinimo);
//           console.table(noteFiltrados);
//       }
//       precioMinimo = parseFloat(prompt('Ingresa el valor minimo que desee buscar / 0-para salir'));
//   }


/* Asi agregue variables, funciones, array con objetos
y un metodo de filtradoa como pide la consigna. */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const carrito = [];
let botones = document.getElementsByClassName('btn-compra');
let tablaBody = document.getElementById('tablabody');

for (const boton of botones) {
    boton.addEventListener('click', respuestaClick)
    function respuestaClick() {
        const prodACarro = notebooks.find((producto) => producto.id == boton.id);
        console.log(prodACarro);
        agregarACarrito(prodACarro);
    }
}

 function agregarACarrito(prodACarro) {
     carrito.push(prodACarro);
     console.table(carrito);
     tablaBody.innerHTML += `
     <tr>
         <td>${prodACarro.marca}</td>
        <td>${prodACarro.modelo}</td>
         <td>${prodACarro.precio}</td>
         <td><button onclick="eliminarDelCarrito(${carrito.length - 1})"><i class="fa-solid fa-trash"></i></button></td>
     </tr>
     `;
     totalPrecio += prodACarro.precio;
     actualizarTotalPrecio();
 }

 let totalPrecio = 0;

 function actualizarTotalPrecio(){
     const totalDeTodo = document.getElementById('total');
     totalDeTodo.innerHTML = 'TOTAL A PAGAR $:'  + totalPrecio;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function eliminarDelCarrito(indice) {
    const productoEliminado = carrito[indice];
    carrito.splice(indice, 1);
  
    renderizarCarrito();
    totalPrecio -= productoEliminado.precio;
    actualizarTotalPrecio();
  }
  
  function renderizarCarrito() {
    tablaBody.innerHTML = '';
  
    carrito.forEach((producto, indice) => {
      tablaBody.innerHTML += `
        <tr>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
            <td><button onclick="eliminarDelCarrito(${indice})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
      `;
    });
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

