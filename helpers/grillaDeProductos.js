function grillaDeProductos(products, esAdmin = false) {
 return `
    <div class="grilla-productos">
      ${products.map(product => `
        <div class="carta-producto">
          <img src="${product.imagen}" alt="${product.nombre}">
          <h3>${product.nombre}</h3><br>
            <a class="btn" href="${esAdmin ? `/dashboard/${product._id}` : `/products/${product._id}`}">Ver detalle</a>
        </div>
      `).join('')}
    </div>
  `;
      }

module.exports = grillaDeProductos;