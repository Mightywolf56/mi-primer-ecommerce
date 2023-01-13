import { productos, pintarProductos } from "./products.js"

let carrito = []

const cartList = document.querySelector('.cart__list')
const cartCount = document.querySelector('.cart__count')
const subTotalPrice = document.querySelector('.cart__subtotal-price')
const totalPrice = document.querySelector('.cart__total-price')

function pintarCarritoDeCompras() {
  let html = ''

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    html += `<article class="cart__item">
    <div class="cart__img">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="cart__content">
      <h2 class="cart__name">
        <span>${producto.nombre}</span>
        <span class="cart__price">$${producto.precio}</span>
      </h2>
      <div class="cart__amout">
        <div>
          <span class="cart__subtotal">$${producto.precio * articulo.cantidad}</span> x <span class="cart__quantity">${articulo.cantidad}</span>
        </div>
        <button type="button" class="button cart__button cart--delete" title="remove from cart" data-id="${articulo.id}">
          <i class='bx bx-trash button--icon'></i>
        </button>
      </div>
    </div>
    <div class="cart__buttons">
      <button type="button" class="button cart__button cart--remove" title="remove one" data-id="${articulo.id}">
        <i class='bx bx-minus button--icon'></i>
      </button>
      <span class="cart__quantity">${articulo.cantidad}</span>
      <button type="button" class="button cart__button cart--add" title="add one" data-id="${articulo.id}">
        <i class='bx bx-plus button--icon'></i>
      </button>
    </div>
  </article>`
  }

  cartList.innerHTML = html
  cartCount.innerHTML = contadorDeArticulos()
  subTotalPrice.innerHTML = '$' + obtenerTotal().toFixed(2)
  totalPrice.innerHTML = '$' + obtenerTotal().toFixed(2)
}

function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }

  pintarCarritoDeCompras()
}

function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)

  pintarCarritoDeCompras()
}

function limpiarCarrito() {
  carrito = []
}

function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }

  window.alert('Gracias por su compra')
  limpiarCarrito()
  pintarCarritoDeCompras()
  pintarProductos()
}

export {
  carrito,
  pintarCarritoDeCompras,
  removerDelCarrito,
  eliminarDelCarrito,
  comprar
}