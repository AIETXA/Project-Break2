//Archivo Principal

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const { dbConnection } = require('./config/bbdd');
const methodOverride = require('method-override');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index');
const rutasProductos = require('./routes/rutasProductos');
const rutasApi = require('./routes/rutasAPIproductos');
const rutasAuth = require('./routes/authRutas');
const carritoRuta = require('./routes/carritoRuta');




app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));


app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false
}));

app.use('/', rutasAuth);
app.use('/', rutasProductos);
app.use('/api', rutasApi);
app.use(carritoRuta);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs))

dbConnection();

app.get('/', (req, res) => {
  res.redirect('/dashboard');
});


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );