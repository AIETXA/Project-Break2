function grillaDeProductos(productos) {
  return `
    <div class="grilla-productos">
      ${productos.map(product => `
        <div class="carta-producto">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h3>${product.nombre}</h3>
          <p>${product.precio}€</p>
          <a href="/products/${product.id}" class="btn">Ver más</a>
        </div>
      `).join('')}
    </div>
  `;
}

module.exports = grillaDeProductos;