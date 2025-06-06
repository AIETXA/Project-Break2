function detalleDelProducto(product) {
      return `
            <div class="contenedor" id="${product._id}">
            <h1>Productos</h1>
            <div class="grilla-productos"></div>
            <div class="carta-producto"></div>
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