const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const barraNavegacion = require('../helpers/barraNavegacion.js');
const tarjetaDelProducto = require('../helpers/tarjetaDelProducto.js');
const grillaDeProductos = require('../helpers/grillaDeProductos.js');
const formProducto = require('../helpers/formProducto.js');
const esRutaAdmin = require('../helpers/esRutaAdmin.js');







const controladorProductos = { 
  //showProducts: Devuelve la vista con todos los productos.
  async mostrarProductos (req, res) {
    try {
      const { cat: categoria } = req.query;
      const filtro = categoria ? { categoria } : {};
      const productos = await Product.find(filtro);
      const esAdmin = esRutaAdmin(req);
      
      const contenido = `
      <h2>Productos</h2>
         ${grillaDeProductos(productos, esAdmin)}
    `;

      const html = baseHtml(contenido, barraNavegacion(esAdmin));
      res.send(html);
      
    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar mostrar todos los productos'})
    }
  }, 
  //showProductById: Devuelve la vista con el detalle de un producto.
  async mostrarProductoById (req, res) {
    try {
      const productoId = req.params.productoId;
      console.log('ID recibido:', productoId);
      const producto = await Product.findById(productoId);

    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
      const esAdmin = esRutaAdmin(req);
      const contenido = tarjetaDelProducto(producto);
      const html = baseHtml(barraNavegacion(true) + contenido);

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
      const { nombre, descripcion, categoria, talle, precio } = req.body;
      const imagen = req.file?.path || req.file?.url || '';

      const nuevoProducto = await Product.create({
        nombre,
        descripcion,
        imagen,
        categoria,
        talle,
        precio
      });

     

      res.redirect(`/dashboard/${nuevoProducto._id}`);

    } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar crear un producto'})
    }
  },

//showEditProduct: Devuelve la vista con el formulario para editar un producto.
  async editarProducto (req, res) {
    try {
      const producto = await Product.findById(req.params.productoId).lean();
      if (!producto) return res.status(404).send('Producto no encontrado');
      console.log('Producto encontrado:', producto);

      const htmlForm = formProducto(producto, {
        titulo: 'Editar producto',
        accion: `/dashboard/${producto._id}?_method=PUT`,
        botonText: 'Guardar cambios',
        categorias,
        talles
      });
      
      
      res.send(baseHtml(barraNavegacion(true) + htmlForm));
     
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})
  
    }
  },

//showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.*/
  async mostrarNuevoProducto (req, res) {
    
    try {
      const esAdmin = esRutaAdmin(req);
      const contenido = formProducto({
        accion:'/dashboard/nuevo',
        producto: {},
        titulo:'Nuevo producto',
        botonText:'Crear producto'
      }); 
      const html = baseHtml(barraNavegacion(esAdmin) + contenido);
      res.send(html);

  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})

    }
  },

//updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
  async modificarProducto (req, res) {
    try {
      const id = req.params.productoId
      const productoActualizado  = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if (!productoActualizado ) {
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
      const id = req.params.productoId
      const productoEliminado  = await Product.findByIdAndDelete(id)
      if (!productoEliminado ) {
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