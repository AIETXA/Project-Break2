function getProductCards(products) {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.imagen}" alt="${product.nombre}">
        <h2>${product.nombre}</h2>
        <p>${product.descripcion}</p>
        <p>Talle:${product.talle}</p>
        <p>Precio:${product.precio}€</p>
        <a href="/products/${product._id}">Ver detalle</a>
      </div>
    `;
  }
  return html;
}

module.exports = getProductCards;