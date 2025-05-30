const mongoose = require('mongoose');
require ('dotenv').config();

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito')

    } catch {
        console.error(error);
        throw new Error('Error en la conexión')

    }
}

module.exports = { dbConnection };