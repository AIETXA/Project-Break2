const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index');
const rutasProductos = require('./routes/rutasProductos');
const rutasApi = require('./routes/rutasAPIproductos');
const rutasAuth = require('./routes/authRutas');
const carritoRuta = require('./routes/carritoRuta');
const { dbConnection } = require('./config/bbdd');
const PORT = process.env.PORT || 10000;


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
  saveUninitialized: false,
  /*store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
    
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }*/
}));

app.use('/', rutasAuth);
app.use('/', rutasProductos);
app.use('/api', rutasApi);
app.use(carritoRuta);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs))


app.get('/', (req, res) => {
  res.redirect('/dashboard');
});


dbConnection();

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );