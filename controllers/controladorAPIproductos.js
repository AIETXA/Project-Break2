const Product = require('../models/Product');


const controladorAPIproductos = {

    async listarProductos(req, res) {
        try {
            const productos = await Product.find();
            res.json(productos);

        } catch (error) {
            res.status(500).json({ message: 'Error al obtener productos', error });
        }

    },
    
    async obtenerProducto(req, res) {
        try {
            const producto = await Product.findById(req.params.id);
            if(!producto) 
                return res.status(404).json({message:'Producto no encontrado'});
                res.json(producto);

            } catch (error) {
              res.status(500).json({ message: 'Error al obtener el producto', error });
        }
    },

    async crearProducto(req, res) {
        try {
            const productoNuevo = await Product.create(req.body)
            res.status(201).json(productoNuevo);

        } catch (error) {
            res.status(500).json({ message: 'Error al intentar crear el producto', error });
        }
    },

    async actualizarProducto(req, res) {
        try {
            const productoActualizado = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if(!productoActualizado)
                return res.status(404).json({message:'Producto no encontrado'});
                res.json(productoActualizado);

        } catch (error) {
            res.status(500).json({ message: 'Error al intentar actualizar el producto', error });
            }
        },

    async eliminarProducto(req, res) {
        try {
            const productoEliminado = await Product.findByIdAndDelete(req.params.id);
            if(!productoEliminado)
                return res.status(404).json({message:'Producto no encontrado'});
                res.json({message:'Producto eliminado con éxito'});

        } catch (error) {
            res.status(500).json({ message: 'Error al intentar eliminar el producto', error });
            }
        }    
    };

    module.exports = controladorAPIproductos;
    

