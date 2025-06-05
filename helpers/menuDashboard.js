function getMenuDashboard() {
  return `
    <nav>
      <a href="/admin">Dashboard</a>
      <a href="/products/crear">Nuevo Producto</a>
      <a href="/admin/products">Gestionar Productos</a>
      <a href="/logout">Logout</a>
    </nav>
  `;
}
module.exports = { getMenuDashboard };