function getNavBar() {
    return `
     <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/products?categoria=Camisetas">Camisetas</a></li>
        <li><a href="/products?categoria=Pantalones">Pantalones</a></li>
        <li><a href="/products?categoria=Zapatos">Zapatos</a></li>
        <li><a href="/products?categoria=Accesorios">Accesorios</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
    `;
}

module.exports = getNavBar;