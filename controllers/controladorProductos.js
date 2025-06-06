const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const barraNavegacion = require('../helpers/barraNavegacion.js');
const tarjetaDelProducto = require('../helpers/tarjetaDelProducto.js');
const detalleDelProducto = require('../helpers/detalleDelProducto.js');
const formNuevoProducto = require('../helpers/formNuevoProducto.js');
const cloudinary = require('cloudinary').v2;







const controladorProductos = { 
  //showProducts: Devuelve la vista con todos los productos.
  async mostrarProductos (req, res) {
    try {
      const productos = await Product.find();
      const html = `
      <html>
        ${baseHtml()}
        <body>
          ${barraNavegacion(false)}
          <h1>Catálogo de productos</h1>
            ${tarjetaDelProducto(productos)}
        </body>
      </html>
    `;
      
      res.send(html);
      
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar mostrar todos los productos'})
    }
  }, 
  //showProductById: Devuelve la vista con el detalle de un producto.
  async mostrarProductoById (req, res) {
    try {
      const productId = req.params.productId;
      const producto = await Product.findById(productId);

    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
      const detalleProducto = detalleDelProducto(producto);
      const html = baseHtml(barraNavegacion(true) + detalleProducto);
      res.send(html);

    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar mostrar producto por ID'})
    }
  },
  
  //createProduct: Crea un nuevo producto. 
  // Una vez creado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
async create (req, res) {
    try {
      const { nombre, descripcion, imagen, categoria, talle, precio } = req.body;
      const  imagenFinal = imagen;
      const producto = await Product.create({ 
      nombre,
      descripcion,
      imagen: imagenFinal,
      categoria,
      talle,
      precio});

      res.redirect('/dashboard')

  } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar crear un producto'})
    }
  },



//showEditProduct: Devuelve la vista con el formulario para editar un producto.
  async editarProducto (req, res) {
    try {
      const producto = await Product.findById(req.params.id);
      console.log('Producto encontrado:', producto);

      const formHtml = formNuevoProducto(producto, {
        titulo: 'Editar producto',
        accion: `/dashboard/${product._id}?_method=PUT`,
        botonText: 'Guardar cambios'
      });
      
      const html = baseHtml(barraNavegacion(true) + formHtml);
      res.send(html);
     
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})
  
    }
  },

//showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.*/
  async mostrarNuevoProducto (req, res) {
    
    try {
      const formHtml = formNuevoProducto(); 
      const html = baseHtml(barraNavegacion(true) + formHtml);
      
      res.send(html);

  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})

    }
  },

//updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
  async modificarProducto (req, res) {
    try {
      const id = req.params.id
      const modificarProducto = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if (!modificarProducto) {
      return res.status(404).send('Producto no encontrado');
    }
      res.redirect('/dashboard')

    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Error al actualizar el producto' });
    }
  },

  //eliminarProducto: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del tablero.*/
  async eliminarProducto (req, res) {
    try {
      const id = req.params.id
      const eliminarProducto = await Product.findByIdAndDelete(id)
      if (!eliminarProducto) {
        return res.status(404).json({message: "Producto no encontrado"})
      }  
      res.redirect('/dashboard');
  } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Error al eliminar el producto' });
    }
  }
};

module.exports = controladorProductos;