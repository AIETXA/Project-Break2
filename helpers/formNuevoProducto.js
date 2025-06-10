

function formNuevoProducto(product = {}, opciones = {}) {
  const esEdicion = !!product._id;
  const titulo = opciones.titulo || (esEdicion ? 'Editar producto' : 'Crear nuevo producto');
  const accion = opciones.accion || (esEdicion ? `/dashboard/${product._id}?_method=PUT` : '/products');
  const botonText = opciones.botonText || (esEdicion ? 'Guardar cambios' : 'Crear producto');
  
    return `
    <section> 
      <h2>La naranja no se mancha</h2>
      <form class="formulario-producto" action= "${accion}" method="POST" enctype="multipart/form-data">

      <label>Nombre:
        <input type="text" name="nombre" value="${product.nombre || ''}" required>
      </label><br>

      <label>Precio:
        <input type="number" name="precio" value="${product.precio || ''}" required>
      </label><br>

      <label>Descripción:
        <textarea name="descripcion">${product.descripcion || ''}</textarea>
      </label><br>

      <label>Categoría:
        <select name="categoria">
          <option value="Camisetas" ${product.categoria === 'Camisetas' ? 'selected' : ''}>Camisetas</option>
          <option value="Pantalones" ${product.categoria === 'Pantalones' ? 'selected' : ''}>Pantalones</option>
          <option value="Zapatos" ${product.categoria === 'Zapatos' ? 'selected' : ''}>Zapatos</option>
          <option value="Accesorios" ${product.categoria === 'Accesorios' ? 'selected' : ''}>Accesorios</option>
        </select>
      </label><br>

      <label>Imagen:
          <input type="file" name="imagen" accept="imagen/*" />
      </label><br>

      <label>Talles disponibles:
        <select name="talle">
          <option value="S" ${product.talle === 'S' ? 'selected' : ''}>S</option>
          <option value="M" ${product.talle === 'M' ? 'selected' : ''}>M</option>
          <option value="L" ${product.talle === 'L' ? 'selected' : ''}>L</option>
          <option value="XL" ${product.talle === 'XL' ? 'selected' : ''}>XL</option>
        </select>    
      </label><br>
        
      <button type="submit">${botonText}</button>
      </form>
    </section>
    `
};

module.exports = formNuevoProducto;