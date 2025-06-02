const express = require('express');
const routes = express.Router();
const Product = require('../models/Product.js');
const productController = require('../controllers/productController.js');
const upload = require('../middlewares(BONUS)/multer.js')

routes.get('/products', productController.showProducts);
routes.get('/products/:productId', productController.showProductById);
routes.get('/dashboard', productController.showProducts);
routes.get('/dashboard/new', productController.showNewProduct);
routes.post('dashboard', upload.single('imagen'), productController.create);
routes.get('/dashboard/:productId', productController.showProductById);
routes.get('/dashboard/:productId/edit', productController.showEditProduct);
routes.put('/dashboard/:productId', productController.updateProduct); 
routes.delete('/dashboard/:productId/delete', productController.eliminarProducto);

module.exports = routes;
