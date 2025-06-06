function barraNavegacion(isDashboard = false) {
  if(!isDashboard) {

    return `
    <nav>
    <a href="/products">Inicio</a>
    <a href="/dashboard">Dashboard</a>
    <ul>
    <li><a href="/products?categoria=Camisetas">Camisetas</a></li>
    <li><a href="/products?categoria=Pantalones">Pantalones</a></li>
    <li><a href="/products?categoria=Zapatos">Zapatos</a></li>
    <li><a href="/products?categoria=Accesorios">Accesorios</a></li>
    </ul>
    </nav>
    `;
    } else {
      return `
        <nav>
          <a href="/dashboard">Dashboard</a>
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