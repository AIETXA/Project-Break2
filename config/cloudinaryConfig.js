const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:    process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'demo', // Elige el nombre de tu carpeta. Si no existe se crea
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], // Formatos permitidos
    transformation: [{ width: 800, crop: 'limit' }], 
  },
});

module.exports = storage;

