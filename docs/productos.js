module.exports = {
  paths: {
    "/create": {
      post: {
        tags: ["Administrador"],
        description: "Crear Producto",
        operationId: "crearProducto",
        parameters: [],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" }
            },
          },
        },
        responses: {
          201: { description: "Producto creado exitosamente" },
          500: { description: "Server error" },
        },
      },
    },

    "/products": {
      get: {
        tags: ["Público"],
        description: "Mostrar todos los productos",
        operationId: "mostrarProductos",
        parameters: [],
        responses: {
          200: {
            description: "Lista de productos",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Product" }, 
                },
              },
            },
          },
        },
      },
    },

    "/products/{productId}": {
      get: {
        tags: ["Público"],
        summary: "Obtener un producto por ID",
        description: "Devuelve la información pública de un producto específico.",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "ID del producto",
          },
        ],
        responses: {
          200: {
            description: "Producto encontrado",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Product" },
              },
            },
          },
          404: { description: "Producto no encontrado" },
        },
      },
    },

    "/dashboard/{productId}": {
      get: {
        tags: ["Administrador"],
        summary: "Obtener un producto por ID",
        description: "Devuelve los datos del producto con posibilidad de edición.",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "ID del producto",
          },
        ],
        responses: {
          200: {
            description: "Producto encontrado",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Product" },
              },
            },
          },
          404: { description: "Producto no encontrado" },
        },
      },

      put: {
        tags: ["Administrador"],
        summary: "Actualizar producto",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
        responses: {
          200: { description: "Producto actualizado" },
          400: { description: "Error en la solicitud" },
          404: { description: "Producto no encontrado" },
        },
      },

      delete: {
        tags: ["Administrador"],
        summary: "Eliminar producto",
        parameters: [
          {
            name: "productId",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          204: { description: "Producto eliminado" },
          404: { description: "Producto no encontrado" },
        },
      },
    },
  },
};
