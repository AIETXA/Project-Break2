const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/template.js');
const getProductDetail = require('../helpers/getProductDetail.js');




//showProducts: Devuelve la vista con todos los productos.

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products);
    const html = baseHtml + getNavBar() + productCards;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send({message:'Error al intentar devolver la vista de los productos'})

  }
};
    
/*
showProductById: Devuelve la vista con el detalle de un producto.

showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.*/

//createProduct: Crea un nuevo producto. 
// Una vez creado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.
const ProductController = {
  async create (req, res) {
    try {
        const product = await Task.create({...req.body})
        res.status(201).send(task)
    } catch (error) {
      console.log(error)
    }
  }
}
//showEditProduct: Devuelve la vista con el formulario para editar un producto.

//updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.

//eliminarProducto: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del tablero.*/