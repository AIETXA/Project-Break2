

function formNuevoProducto(product = {}) {
return `
      <!DOCTYPE html>
        <html lang="es">
        <head>
       <meta charset="UTF-8" />
        <title>Nuevo producto</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            label { display: block; margin-top: 10px; }
            input, select, textarea { width: 300px; padding: 5px; margin-top: 5px; }
            button { margin-top: 15px; padding: 10px 15px; background-color:rgb(243, 88, 5); color: white; border: none; border-radius: 5px; cursor: pointer; }
            button:hover { background-color:rgb(243, 88, 5); }
          </style>
        </head>
        <body>
          <h1>La naranja no se mancha</h1>
            <form action="/dashboard/nuevo" method="POST" enctype="multipart/form-data">
          
          <section> 
            <h2>Productos</h2>
         

          <label>Nombre:
            <input type="text" name="nombre" value="${product.nombre}" required>
          </label><br>

          <label>Precio:
            <input type="number" name="precio" value="${product.precio}" required>
          </label><br>

          <label>Descripción:
            <textarea name="descripcion">${product.descripcion}</textarea>
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
            <input type="file" name="imagen" accept="image/*" />
          </label><br>

          <label>Talles disponibles:
            <select name="talle">
              <option value="S" ${product.talle === 'S' ? 'selected' : ''}>S</option>
              <option value="M" ${product.talle === 'M' ? 'selected' : ''}>M</option>
              <option value="L" ${product.talle === 'L' ? 'selected' : ''}>L</option>
              <option value="XL" ${product.talle === 'XL' ? 'selected' : ''}>XL</option>
            </select>    
          </label><br>
        
          <button type="submit">Crear producto</button>
          </section>
        </form>
      </body>
    </html>  
    `
}


module.exports = formNuevoProducto;