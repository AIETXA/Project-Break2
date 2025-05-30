const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String }, 
  categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'], required: true }, 
  talla: { type: String, enum: ['S', 'M', 'L', 'XL'], required: true }, 
  precio: { type: Number, required: true },
 
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;