 function editarProducto() {
    return `
    <!DOCTYPE html>
       <html lang="es">
       <head>
         <meta charset="UTF-8" />
         <title>Editar producto</title>
         <style>
           body { font-family: Arial, sans-serif; margin: 20px; }
           label { display: block; margin-top: 10px; }
           input, select, textarea { width: 300px; padding: 5px; margin-top: 5px; }
           button { margin-top: 15px; padding: 10px 15px; background-color:rgb(243, 88, 5); color: white; border: none; border-radius: 5px; cursor: pointer; }
           button:hover { background-color:rgb(243, 88, 5); }
         </style>
       </head>
       <body>
         <h1>Editar Producto</h1>

            <form action="/dashboard/${product._id}?_method=PUT" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_method" value="PUT" />

            <label>Nombre:
                <input type="text" name="nombre" value="${product.nombre}" required />
            </label>

            <label>Descripción:
                <textarea name="description">${product.descripcion || ''}</textarea>
            </label>

            <label>Imagen (URL actual):
                <input type="text" name="imagenUrl" value="${product.imagen || ''}" />
            </label>

            <label>O Subir nueva imagen:
                <input type="file" name="imagen" accept="imagen/*" />
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
                <select name="talle">
                <option value="">Selecciona un talle</option>
                ${talles.map(t => `
                <option value="${t}" ${t === product.talle ? 'selected' : ''}>${t}</option>
                `).join('')}
                </select>
            </label>

            <label>Precio:
                <input type="number" name="precio" min="0" step="0.01" value="${product.precio || 0}" required />
            </label>

            <button type="submit">Guardar Cambios</button>
            </form>
        </body>
    </html>
    `
 }
 