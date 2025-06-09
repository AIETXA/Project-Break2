//Archivo Principal

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { dbConnection } = require('./config/bbdd');
const rutasProductos = require('./routes/rutasProductos');
const methodOverride = require('method-override');
const path = require('path');
const rutasApi = require('./routes/rutasAPIproductos');

dbConnection();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', rutasProductos);
app.use('/api', rutasApi);
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );