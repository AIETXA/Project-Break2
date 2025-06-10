const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:    process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
    params: async (req, file) => {
    const timestamp = Date.now();
    const nombreOriginal = file.originalname.split('.')[0];
    const categoria = req.body?.categoria || 'general';

    return {
      folder: `ecommerce/${categoria}`,
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      transformation: [{ width: 800, crop: 'limit' }],
      public_id: `${timestamp}-${nombreOriginal}`,
    };
  },
});

module.exports = storage;

