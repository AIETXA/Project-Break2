const express = require('express');
const routes = express.Router();
const { mostrarLogin, procesarLogin, logout } = require('../controllers/authControlador');

routes.get('/login', mostrarLogin);
routes.post('/login', procesarLogin);
routes.get('/logout', logout);

module.exports = routes;