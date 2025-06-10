function barraNavegacion(esAdmin = false) {
  if(!esAdmin) {

    return `
    <nav>
      <a href="/products">Inicio</a>
      <a href="/products?categoria=Camisetas">Camisetas</a>
      <a href="/products?categoria=Pantalones">Pantalones</a>
      <a href="/products?categoria=Sudaderas">Sudaderas</a>
      <a href="/products?categoria=Accesorios">Accesorios</a>
      
    </nav>
    `;
    } else {
      return `
        <nav>
          <ul>
            <li><a href="/dashboard/nuevo">Nuevo producto</a></li>
            <li><a href="/dashboard">Editar producto</a></li>
          </ul>
          <a href="/products">Ir a tienda</a>
        </nav>
      `
    }
}

module.exports = barraNavegacion;