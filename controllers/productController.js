const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/template.js');





//showProducts: Devuelve la vista con todos los productos.

const showProducts = async (req, res) => {
  const products = await Product.find();
  const productCards = getProductCards(products);
  const html = baseHtml + getNavBar() + productCards;
  res.send(html);
};
    
/*
showProductById: Devuelve la vista con el detalle de un producto.

showNewProduct: Devuelve la vista con el formulario para subir un artículo nuevo.

createProduct: Crea un nuevo producto. Una vez creado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.

showEditProduct: Devuelve la vista con el formulario para editar un producto.

updateProduct: Actualiza un producto. Una vez actualizado, redirige a la vista de detalle del producto oa la vista de todos los productos del tablero.

eliminarProducto: Elimina un producto. Una vez eliminado, redirige a la vista de todos los productos del tablero.*/