function barraNavegacion(esAdmin = false) {
  if(!esAdmin) {

    return `
    <nav>
      <a class="inicio" href="/" >Inicio</a>
      <a href="/products?categoria=Camisetas">Camisetas</a>
      <a href="/products?categoria=Pantalones">Pantalones</a>
      <a href="/products?categoria=Sudaderas">Sudaderas</a>
      <a href="/products?categoria=Accesorios">Accesorios</a>
      
    </nav>
    `;
    } else {
      return `
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/dashboard/nuevo">Nuevo producto</a>
        <a href="/products">Tienda</a>
      </nav>
      `
    }
}

module.exports = barraNavegacion;