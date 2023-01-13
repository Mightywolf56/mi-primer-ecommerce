const metodos = {
  recorrer(arreglo, callback) {
    for (let i = 0; i < arreglo.length; i++) {
      callback(arreglo[i], i, arreglo)
    }
  },
  filtrar(arreglo, callback) {
    const datosFiltrados = []
    for (let i = 0; i < arreglo.length; i++) {
      const resultado = callback(arreglo[i], i, arreglo)
      if (resultado) {
        datosFiltrados.push(arreglo[i])
      }
    }
    return datosFiltrados
  },
  encontrar(arreglo, callback) {
    for (let i = 0; i < arreglo.length; i++) {
      const resultado = callback(arreglo[i], i, arreglo)
      if (resultado) {
        return arreglo[i]
      }
    }
  },
  mapear(arreglo, callback) {
    const nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) {
      nuevoArreglo.push(callback(arreglo[i], i, arreglo))
    }
    return nuevoArreglo
  }
}

export default metodos
