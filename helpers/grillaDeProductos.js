function grillaDeProductos(products, esAdmin = false) {
 return `
    <div class="grilla-productos">
      ${products.map(product => `
        <div class="carta-producto">
          <div class="imagen-producto">
            <img src="${product.imagen}" alt="${product.nombre}">
          </div>
          <h3>${product.nombre}</h3>
          ${esAdmin
            ? `
            <div class="botones-acciones">
            <a class="boton" href="/dashboard/${product._id}/editar">Editar</a>
            <form action="/dashboard/${product._id}/borrar?_method=DELETE" method="POST" style="display:inline;">
            <button type="submit" class="btn">Eliminar</button>
            </form>
            </div>
            `
            : `
            <a class="btn" href="/products/${product._id}">Ver detalle</a>
            `
          }
           
        </div>
      `).join('')}
    </div>
  `;
      }

module.exports = grillaDeProductos;