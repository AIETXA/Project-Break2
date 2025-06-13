module.exports = {
    openapi:"3.0.3",
    info:{
        version:"1.0.0",
        title:"LA NARANJA NO SE MANCHA",
        description: "Products API"
    },
    servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local"
    }
  ],
    tags: [
    { name: "Público", description: "Rutas accesibles para todos los usuarios" },
    { name: "Administrador", description: "Rutas protegidas para gestión de productos" }
  ]
};
