//Archivo Principal

const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/bbdd');
const productRoutes = require('./routes/productRoutes');


dbConnection();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/create', productRoutes);



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );