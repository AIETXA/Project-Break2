const express = require('express');
const routes = express.Router();
const Product = require('../models/Product.js');
const controladorProductos = require('../controllers/controladorProductos.js');
const upload = require('../middlewares/uploadMiddleware.js')
const protegerRuta = require('../middlewares/authMiddleware');

routes.get('/', (req, res) => {
  res.redirect('/dashboard');
});



routes.get('/products', controladorProductos.mostrarProductos);
routes.get('/products/:productoId', controladorProductos.mostrarProductoById);

routes.get('/dashboard', protegerRuta, controladorProductos.mostrarProductos);
routes.get('/dashboard/nuevo', protegerRuta, controladorProductos.mostrarNuevoProducto);//mostrar formulario para crear nuevo producto

routes.post('/dashboard/nuevo', protegerRuta, upload.single('imagen'), controladorProductos.create);//crear productos

routes.get('/dashboard/:productoId', protegerRuta, controladorProductos.mostrarProductoById);
routes.get('/dashboard/:productoId/editar', protegerRuta, controladorProductos.editarProducto);
routes.put('/dashboard/:productoId', protegerRuta, controladorProductos.modificarProducto); 
routes.delete('/dashboard/:productoId/borrar', protegerRuta, controladorProductos.eliminarProducto);


module.exports = routes;
