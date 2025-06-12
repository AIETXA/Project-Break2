function formProducto(product = {}, options = {}) {
  const {
    titulo = 'Nuevo producto',
    accion = '/dashboard/nuevo',
    botonText = 'Crear producto',
    categorias = ['Camisetas', 'Pantalones', 'Sudaderas', 'Accesorios'],
    talles = ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  } = options;

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>${titulo}</title><br>
    

     <div style="align-items: start; padding: 9px; color: white; width: 500px;">
       
     <style>
        .form-container {
          border-radius: 10px;
          justify-content: center;
          border: 2px solid rgb(243, 88, 5);
          padding: 30px 40px;
          width: 400px;
        }

        label {
          display: block;
          margin-top: 15px;
        }

        input, select, textarea {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .btn {
          margin-top: 20px;
          padding: 10px 15px;
          background-color: rgb(243, 88, 5);
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
          font-size: 1rem;
        }

        .btn :hover {
          background-color: rgb(220, 70, 0);
       }  
  </style>
  </head>
    
  <body>
    <div class="form-container">
      <h1>${titulo}</h1><br>
      <form action="${accion}" method="POST">
        ${product._id ? `<input type="hidden" name="_method" value="PUT" />` : ''}

        <label>Nombre:
          <input type="text" name="nombre" value="${product.nombre || ''}" required />
        </label>

        <label>Precio:
          <input type="number" name="precio" min="0" step="0.01" value="${product.precio || ''}" required />
        </label>

        <label>Descripción:
          <textarea name="descripcion">${product.descripcion || ''}</textarea>
        </label>

        <label>Imagen (URL):
          <input type="text" name="imagenUrl" placeholder="URL de la imagen" value="${product.imagen || ''}" />
        </label>


        <label>Categoría:
          <select name="categoria" required>
            <option value="">Selecciona una categoría</option>
            ${categorias.map(cat => `
              <option value="${cat}" ${cat === product.categoria ? 'selected' : ''}>${cat}</option>
            `).join('')}
          </select>
        </label>

        <label>Talle:
          <select name="talle" required>
            <option value="">Selecciona un talle</option>
            ${talles.map(t => `
              <option value="${t}" ${t === product.talle ? 'selected' : ''}>${t}</option>
            `).join('')}
          </select>
        </label>

        <button class="btn" type="submit">${botonText}</button>
      </form>
    </div>
    </body>
  </html>
  `;
}

module.exports = formProducto;
