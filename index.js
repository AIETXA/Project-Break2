


const app = require('./app');
const { dbConnection } = require('./config/bbdd');
const PORT = process.env.PORT || 3000;


dbConnection();

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );