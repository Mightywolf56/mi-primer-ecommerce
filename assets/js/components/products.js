import db from '../data/data.js'
import { carrito, pintarCarritoDeCompras } from './cart.js'

const productos = db

const productList = document.querySelector('.products__list')

function pintarProductos() {
  let html = ''

  for (let { id, nombre, descripcion, precio, cantidad, imagen, categoria } of productos) {
    html += `<article class="products__item ${categoria}">
    <div class="products__img">
      <img src="${imagen}" alt="${nombre}">
      <span class="products__stock">Quedan ${cantidad}</span>
    </div>
    <div class="products__content">
      <h2 class="products__name">
        <span>${nombre}</span>
        <span class="products__price">$ ${precio}</span>
      </h2>
      <p class="products__info">${descripcion}</p>
    </div>
    <div class="products__buttons">
      <button class="button products__button btn--wish" data-id="${id}">
        <i class="bx bx-heart button--icon"></i>
      </button>
      <button class="button products__button btn--cart" data-id="${id}">
        <i class="bx bx-cart button--icon"></i>
      </button>
    </div>
  </article>`
  }

  productList.innerHTML = html
}

function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }

  pintarCarritoDeCompras()
}

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

export {
  productos,
  pintarProductos,
  agregarCarrito
}