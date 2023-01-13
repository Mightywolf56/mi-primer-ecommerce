import { pintarProductos, agregarCarrito } from './components/products.js'
import { pintarCarritoDeCompras, removerDelCarrito, eliminarDelCarrito, comprar } from './components/cart.js'

import navbar from './components/navbar.js'

// Funciones de la página
navbar()


// Carrito
pintarProductos()
pintarCarritoDeCompras()

document.addEventListener('click', (e) => {
  const agrergarProducto = e.target.closest('.btn--cart')
  const addProducto = e.target.closest('.cart--add')
  const removeProducto = e.target.closest('.cart--remove')
  const deleteProducto = e.target.closest('.cart--delete')
  const chekoutProducto = e.target.closest('.btn--comprar')

  if (agrergarProducto) {
    const id = +agrergarProducto.dataset.id

    agregarCarrito(id)
  }

  if (addProducto) {
    const id = +addProducto.dataset.id

    agregarCarrito(id)
  }

  if (removeProducto) {
    const id = +removeProducto.dataset.id

    removerDelCarrito(id)
  }

  if (deleteProducto) {
    const id = +deleteProducto.dataset.id

    eliminarDelCarrito(id)
  }

  if (chekoutProducto) {
    comprar()
  }
})


