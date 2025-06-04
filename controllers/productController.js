const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/getProductCards.js');
const getProductDetail = require('../helpers/getProductDetail.js');
const getNewProductForm = require('../helpers/getNewProductForm.js');
const cloudinary = require('cloudinary').v2;


const productControllers = { 
  
  //showProducts: Devuelve la vista con todos los productos.
  async showProducts (req, res) {
    try {
      const products = await Product.find();
      const productCards = getProductCards(products, true);
      const html = baseHtml(getNavBar() + productCards);
      res.send(html);
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al intentar devolver la vista de los productos'})

    }
  },
    
//showProductById: Devuelve la vista con el detalle de un producto.
  async showProductById (req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      const productHtml = getProductDetail(product); 
      const html = baseHtml(getNavBar() + productHtml);
      res.send(html);
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al intentar devolver el producto'})

    }
  },

//createProduct: Crea un nuevo producto. 
// Una vez creado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
async create (req, res) {
    try {
      if(!req.file)
        return res.status(400).send({message:"La imagen no se pudo subir"})
        const imagen = req.file.path;
        const product = await Product.create({...req.body, imagen});
      res.redirect('/dashboard')
  } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar crear un producto'})
    }
  },

//showEditProduct: Devuelve la vista con el formulario para editar un producto.
  async showEditProduct (req, res) {
    try {
      console.log('ID recibido:', req.params.id);
      const product = await Product.findById(req.params.id);
      console.log('Producto encontrado:', product);

      const formHtml = getNewProductForm(product, {
        title: 'Editar producto',
        action: `/dashboard/${product._id}?_method=PUT`,
        buttonText: 'Guardar cambios'
      });
      
      const html = baseHtml(getNavBar() + formHtml);
      res.send(html);
     
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})
  
    }
  },

//showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.*/
  async showNewProduct (req, res) {
    try {
      console.log(html)
      const formHtml = getNewProductForm(); 
      const html = baseHtml(getNavBar() + formHtml);
      res.send(html);

  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})

    }
  },

//updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
  async updateProduct (req, res) {
    try {
      const id = req.params.id
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if (!updatedProduct) {
      return res.status(404).send('Producto no encontrado');
    }
      res.redirect(`/dashboard/productos/${updatedProduct._id}`)
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Error al actualizar el producto' });
    }
  },

  //eliminarProducto: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del tablero.*/
  async eliminarProducto (req, res) {
    try {
      const id = req.params.id
      const deletedProduct = await Product.findByIdAndDelete(id)
      if (!deletedProduct) {
        return res.status(404).json({message: "Producto no encontrado"})
      }  
      res.redirect('/dashboard');
  } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Error al eliminar el producto' });
    }
  }
};

module.exports = productControllers;