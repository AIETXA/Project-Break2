function getNewProductForm() {
    return `
    <section> 
    <h2>Crear nuevo producto</h2>
    <form action= "/productos" method="POST">
    <label>Nombre:
    <input type="text" name="name" required>
    </label><br>

    <label>Precio:
    <input type="number" name="price" required>
    </label><br>

    <label>Descripcion:
    <textarea="description"></textarea>
    </label><br>

    <label>Categoría:
    <select name="category">
        <option value="Camisetas">Camisetas</option>
        <option value="Pantalones">Pantalones</option>
        <option value="Zapatos">Zapatos</option>
        <option value="Accesorios">Accesorios</option>
    </select>
    </label><br>

    <label>Imagen (URL):
          <input type="text" name="image">
        </label><br>

    <label>Talle:
     <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
     </label><br>
        
        <button type="submit">Crear producto</button>
      </form>
    </section>
    `
};

module.exports = getNewProductForm;