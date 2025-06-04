const express = require('express');
const routes = express.Router();
const Product = require('../models/Product.js');
const productController = require('../controllers/productController.js');
const upload = require('../middlewares(BONUS)/multer.js')

routes.get('/products', productController.showProducts);
routes.get('/products/:id', productController.showProductById);
routes.get('/dashboard', productController.showProducts);
routes.get('/dashboard/new', productController.showNewProduct);
routes.post('/products', upload.single('imagen'), productController.create);
routes.get('/products/:id', productController.showProductById);
routes.get('/dashboard/:id/edit', productController.showEditProduct);
routes.put('/dashboard/:id', productController.updateProduct); 
routes.delete('/dashboard/:id/delete', productController.eliminarProducto);


module.exports = routes;
