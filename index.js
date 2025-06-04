//Archivo Principal

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { dbConnection } = require('./config/bbdd');
const productRoutes = require('./routes/productRoutes');
const methodOverride = require('method-override');
const path = require('path');




dbConnection();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/', productRoutes);

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );