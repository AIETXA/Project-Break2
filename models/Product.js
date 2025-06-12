const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String }, 
  categoria: { type: String, enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'], required: true }, 
  talle: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], required: true }, 
  precio: { type: Number, required: true },
 
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

