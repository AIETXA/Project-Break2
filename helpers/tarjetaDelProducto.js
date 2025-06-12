function tarjetaDelProducto(product, esAdmin = false) {
 return `
 <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
   <div class="tarjetaProducto" 
    style="text-align: center; justify-content: center; height:500px; margin: 2rem; background-color:rgb(241, 229, 224);
        width: 30%; ">
      <h1>${product.nombre}</h1>
      ${product.imagen && product.imagen.startsWith('http') 
        ? `<img src="${product.imagen}" alt="${product.nombre}" style="width: 250px; border-radius: 10px;" />`
        : ''
      }
      <p><strong>Descripción:</strong> ${product.descripcion}</p>
      <p><strong>Precio:</strong> ${product.precio} €</p>
      <p><strong>Categoría:</strong> ${product.categoria}</p>
      <p><strong>Talla:</strong> ${product.talle}</p>

      ${esAdmin
        ? `
          <a href="/dashboard/${product._id}/editar">
            <button class="btn-editar">Editar</button>
          </a>
          <form action="/dashboard/${product._id}/borrar?_method=DELETE" method="POST" style="display:inline;">
            <button type="submit" class="btn">Eliminar</button>
          </form>
        `
        : `
          <form action="/carrito/agregar" method="POST" style="margin-top: 1rem;">
            <input type="hidden" name="productoId" value="${product._id}" />
            <button type="submit" class="btn">Agregar al carrito</button>
          </form>
        `
      }
      <div style="margin-top: 20px;">
        <a href="/products" class="btn" >Volver a la tienda</a>
      </div>
  `;
}

module.exports = tarjetaDelProducto;  
