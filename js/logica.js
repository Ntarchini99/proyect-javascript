const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const botones = document.getElementsByClassName('btn-compra');
const tablaBody = document.getElementById('tablabody');
const btnFinalizar = document.getElementById('btn-finalizar');
const mensajeAgradecimiento = document.getElementById('mensaje-agradecimiento');
let totalPrecio = 0;

for (const boton of botones) {
  boton.addEventListener('click', respuestaClick);
}

function respuestaClick() {
  const prodACarro = productos.find((producto) => producto.id == this.id);
  agregarACarrito(prodACarro);
}

function agregarACarrito(prodACarro) {
  carrito.push(prodACarro);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  renderizarCarrito();
}

function renderizarCarrito() {
  if (tablaBody) {
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

    actualizarTotalPrecio();
  }
}

function eliminarDelCarrito(indice) {
  const productoEliminado = carrito[indice];
  carrito.splice(indice, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  renderizarCarrito();
}

function actualizarTotalPrecio() {
  const totalDeTodo = document.getElementById('total');
  totalPrecio = carrito.reduce((total, producto) => total + producto.precio, 0);
  if (totalDeTodo) {
    totalDeTodo.innerHTML = 'TOTAL A PAGAR $: ' + totalPrecio;
  }
}

// Puse el window add.eventlistener para que se reenderize el carrito cuando se cargue la pagina.
window.addEventListener('DOMContentLoaded', function () {
  obtenerJsonProds(); // aca cargue el archivo JSON de productos(me complico la vida)
});

if (btnFinalizar) {
  btnFinalizar.addEventListener('click', finalizarCompra);
}

// Cree una funcion para que cuando se finalize la compra se vacie el carrito y se guarde la info de ese momento.
function finalizarCompra() {

  if (mensajeAgradecimiento) {
    mensajeAgradecimiento.textContent = '¡Muchas gracias por comprar en TIENDA IMPORT, lo esperamos nuevamente!';
    mensajeAgradecimiento.style.display = 'block';
  }

  // elimina todo del carrito
  carrito.length = 0;
  localStorage.removeItem('carrito');
  renderizarCarrito();
}

const selectMarca = document.getElementById('marcar');
if (selectMarca) {
  selectMarca.addEventListener('change', filtrarPorMarca);
}

function filtrarPorMarca() {
  const marcaSeleccionada = selectMarca.value;
  const cards = document.getElementsByClassName('card');

  for (const card of cards) {
    const cardMarca = card.getAttribute('data-brand');

    if (marcaSeleccionada === '' || cardMarca === marcaSeleccionada) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}

async function obtenerJsonProds() {
  const URLJSON = './productos.json';
  const respuesta = await fetch(URLJSON);
  const data = await respuesta.json();
  productos = data;

  renderizarCarrito();
}
