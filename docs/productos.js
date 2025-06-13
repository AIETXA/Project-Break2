module.exports = {
  paths: {
    "/create": {
      post: {
        tags: ["Products"],
    
        description: "Crear Producto",
        operationId: "crearProducto",
        parameters: [],
        requestBody: {
        required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Producto creado exitosamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
  },
};
