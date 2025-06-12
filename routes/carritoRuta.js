const express = require('express');
const router = express.Router();


router.post('/carrito/agregar', (req, res) => {
    const productoId = req.body.productoId;

    if(!req.session.carrito) {
        req.session.carrito = [];
    }
    req.session.carrito.push(productoId);
    res.send('<h1>Producto agregado al carrito 🛒</h1>');
});
module.exports = router;