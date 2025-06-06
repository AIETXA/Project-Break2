function detalleDelProducto(product) {
      return `
            <div class="product-detail" id="${product._id}">
            <img src="${product.imagen}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <p>${product.descripcion}</p>
            <p>Talle:${product.talle}</p>
            <p>Precio:${product.precio}€</p>
            <a href="/products">Volver</a>
            </div>
      `;
  }
 


module.exports = detalleDelProducto;