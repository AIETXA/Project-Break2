const express = require('express');
const routes = express.Router();
const controladorAPIproductos = require('../controllers/controladorAPIproductos');


routes.get('/products', controladorAPIproductos.listarProductos);
routes.get('/products/:id', controladorAPIproductos.obtenerProducto);
routes.post('/products', controladorAPIproductos.crearProducto);
routes.put('/products/:id', controladorAPIproductos.actualizarProducto);
routes.delete('/products/:id', controladorAPIproductos.eliminarProducto);

module.exports = routes;