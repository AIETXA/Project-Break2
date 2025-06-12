const express = require('express');
const router = express.Router();


router.post('/carrito/agregar', (req, res) => {
    const productoId = req.body.productoId;

    if(!req.session.carrito) {
        req.session.carrito = [];
    }
    req.session.carrito.push(productoId);
    res.send('Producto agregado al carrito');
});
module.exports = router;