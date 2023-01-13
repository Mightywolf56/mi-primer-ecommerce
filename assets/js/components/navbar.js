function navbar() {
  const navbarMenu = document.querySelector('.navbar__menu')
  const cartMenu = document.querySelector('.cart')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar__toggle')) {
      navbarMenu.classList.toggle('show--menu')
    }

    if (e.target.closest('.navbar__close')) {
      navbarMenu.classList.remove('show--menu')
    }

    /* Menu Carrito */
    if (e.target.closest('.navbar__cart')) {
      cartMenu.classList.toggle('show--cart')
    }

    if (e.target.closest('.cart__close')) {
      cartMenu.classList.remove('show--cart')
    }
  })
}

export default navbar