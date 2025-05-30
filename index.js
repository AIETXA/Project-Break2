//Archivo Principal

const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/bbdd');

dbConnection();

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`) );