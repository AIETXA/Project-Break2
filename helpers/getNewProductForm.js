

function getNewProductForm(product = {}, options = {}) {
  const isEdition = !!product._id;
  const title = options.title || (isEdition ? 'Editar producto' : 'Crear nuevo producto');
  const action = options.action || (isEdition ? `/dashboard/${product._id}?_method=PUT` : '/create');
  const buttonText = options.buttonText || (isEdition ? 'Guardar cambios' : 'Crear producto');
  
    return `
    <section> 
      <h2>${title}</h2>
      <form action= "${action}" method="POST" enctype="multipart/form-data">

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
        <select name="category">
          <option value="Camisetas" ${product.category === 'Camisetas' ? 'selected' : ''}>Camisetas</option>
          <option value="Pantalones" ${product.category === 'Pantalones' ? 'selected' : ''}>Pantalones</option>
          <option value="Zapatos" ${product.category === 'Zapatos' ? 'selected' : ''}>Zapatos</option>
          <option value="Accesorios" ${product.category === 'Accesorios' ? 'selected' : ''}>Accesorios</option>
        </select>
      </label><br>

      <label>Imagen (URL):
        <input type="file" name="imagen">
      </label><br>

      <label>Talles disponibles:
        <select name="talle">
          <option value="S" ${product.talle === 'S' ? 'selected' : ''}>S</option>
          <option value="M" ${product.talle === 'M' ? 'selected' : ''}>M</option>
          <option value="L" ${product.talle === 'L' ? 'selected' : ''}>L</option>
          <option value="XL" ${product.talle === 'XL' ? 'selected' : ''}>XL</option>
        </select>    
      </label><br>
        
      <button type="submit">${buttonText}</button>
      </form>
    </section>
    `
};

module.exports = getNewProductForm;