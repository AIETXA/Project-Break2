const request = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const Product = require('../models/Product');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  await Product.deleteMany();
});

describe('POST /dashboard/nuevo', () => {
  it('debería crear un nuevo producto y redirigir al detalle del producto', async () => {
    const res = await request(app)
      .post('/dashboard/nuevo')
      .type('form')
      .send({
        nombre: 'MANU GINOBILI',
        descripcion: 'Camiseta de básquet',
        categoria: 'Camisetas',
        talle: 'M',
        precio: 50,
        imagenUrl: 'https://res.cloudinary.com/ddtqzg7w9/image/upload/v1749038533/GINOBILI_vgpdpb.png'
      });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toContain('/dashboard/');

    const productos = await Product.find();
    expect(productos.length).toBe(1);
    expect(productos[0].nombre).toBe('Camisetas');
  });
});