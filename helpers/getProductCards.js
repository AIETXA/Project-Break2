function getProductCards(products) {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.imagen || 'https://collection.cloudinary.com/ddtqzg7w9/e218a42bf29299c893cb47ce952844d9'}" alt="${product.nombre}"/>
        <h2>${product.nombre}</h2>
        <p>${product.descripcion}</p>
        <p>Talle:${product.talle}</p>
        <p>Precio:${product.precio}€</p>
        <a href="/products/${product._id}">Ver detalle</a>
        
        <a href="/dashboard/${product._id}/edit">Editar</a>
        
        <form method="POST" action="/dashboard/${product._id}/delete?_method=DELETE" style="display:inline;">
        <button type="submit" onclick="return confirm('¿Eliminar producto?')">Eliminar</button>
        </form> : ''}
      </div>
    `;
  }
  return html;
}

module.exports = getProductCards;