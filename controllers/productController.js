const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/template.js');
const getProductDetail = require('../helpers/getProductDetail.js');
const getNewProductForm = require('../helpers/getNewProductForm.js');



//showProducts: Devuelve la vista con todos los productos.

const prductControllers = { 
  
  async showProducts (req, res) {
    try {
      const products = await Product.find();
      const productCards = getProductCards(products);
      const html = baseHtml + getNavBar() + productCards;
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
      const html = baseHtml + getNavBar() + productHtml;
      res.send(html);
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al intentar devolver el producto'})

    }
  },

//showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.*/
 async showNewProduct (req, res) {
    try {
      const formHtml = getNewProductForm(); 
      const html = baseHtml + getNavBar() + formHtml;
      res.send(html);
  } catch (error) {
      console.error(error);
      res.status(500).send({message:'Error al cargar el formulario'})

    }
  },

//createProduct: Crea un nuevo producto. 
// Una vez creado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
async create (req, res) {
    try {
      const product = await Product.create({...req.body})
      res.redirect('/dashboard')
  } catch (error) {
      console.log(error);
      res.status(500).send({message: 'Error al intentar crear un producto'})
    }
  },
//showEditProduct: Devuelve la vista con el formulario para editar un producto.







//updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.









//eliminarProducto: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del tablero.*/

 async eliminarProducto (req, res) {
    try {
      const id = req.params.id
      const deletedProduct = await Product.findByIdAndDelete(id)
      if (!deletedProduct) {
        return res.status(404).json({message: "Producto no encontrado"})
      }  
      res.json({message: "Producto eliminado con éxito", deletedProduct})
  } catch (error) {
        console.log(error)
    }
}
}
