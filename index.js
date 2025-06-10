//Archivo Principal

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const { dbConnection } = require('./config/bbdd');
const rutasProductos = require('./routes/rutasProductos');
const rutasApi = require('./routes/rutasAPIproductos');
const methodOverride = require('method-override');
const session = require('express-session');
const rutasAuth = require('./routes/authRutas');



app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false
}));

app.use('/', rutasAuth);
app.use('/', rutasProductos);
app.use('/api', rutasApi);




dbConnection();

app.get('/', (req, res) => {
  res.redirect('/dashboard');
});


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );