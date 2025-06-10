function tarjetaDelProducto(product) {
  return `
    <div class="contenedor" style="text-align: center; margin: 2rem;">
      <h1>Productos</h1>
      <h2>${product.nombre}</h2>
      <img src="${product.imagen}" alt="${product.nombre}">
      <p>${product.descripcion}</p>
      <p><strong>Talle:</strong> ${product.talle}</p>
      <p><strong>Precio: ${product.precio}€</strong></p>
      <a href="/products">Volver</a>
    </div>
  `;
}


module.exports = tarjetaDelProducto;