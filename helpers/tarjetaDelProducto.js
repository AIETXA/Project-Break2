function tarjetaDelProducto(product) {
 return `
   <div class="tarjetaProducto" style="text-align: center; margin: 2rem;">
      <h1>${product.nombre}</h1>
      ${product.imagen && product.imagen.startsWith('http') 
        ? `<img src="${product.imagen}" alt="${product.nombre}" style="width: 250px; border-radius: 10px;" />`
        : ''
      }
      <p>${product.descripcion}</p>
      <p><strong>${product.precio} €</strong></p>
      <p>Categoría: ${product.categoria}</p>
      <p><strong>Talla:</strong> ${product.talle}</p>
    </div>  
  `;
}

module.exports = tarjetaDelProducto;  
