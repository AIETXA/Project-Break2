const express = require('express');
const routes = express.Router();
const Product = require('../models/Product.js');
const controladorProductos = require('../controllers/controladorProductos.js');

routes.get('/', (req, res) => {
  res.redirect('/dashboard');
});

routes.get('/products', controladorProductos.mostrarProductos);
routes.get('/dashboard', controladorProductos.mostrarProductos);
routes.get('/dashboard/nuevo', controladorProductos.mostrarNuevoProducto);
routes.post('/products', controladorProductos.create);
routes.get('/products/:id', controladorProductos.mostrarProductoById);
routes.get('/dashboard/:id/editar', controladorProductos.editarProducto);
routes.put('/dashboard/:id', controladorProductos.modificarProducto); 
routes.delete('/dashboard/:id/borrar', controladorProductos.eliminarProducto);


module.exports = routes;
