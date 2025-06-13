module.exports = {
    components:{
        schemas:{
            Product:{
                type:'object',
                required: ['nombre','categoria','talle','precio'],
                properties:{
                    _id:{
                        type:'string',
                        description:"ID único del producto (ObjectId de MongoDB)",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    nombre:{
                        type:'string',
                        description:"Nombre del producto",
                        example:"Manu Ginobili"
                    },
                    descripcion:{
                        type:'string',
                        description:"Descripción del producto",
                        example:"Camiseta de básquet"
                    },
                    imagen:{
                        type:'string',
                        description:"url de la imagen",
                        example:"https://res.cloudinary.com/ddtqzg7w9/image/upload/v1749767261/PELOTA_FONDO_ifphoa.jpg"
                    },
                    categoria:{
                        type:'string',
                        enum: ['Camisetas', 'Pantalones', 'Sudaderas', 'Accesorios'],
                        description:"Categoria del producto",
                        example:"Camisetas"
                    },
                    talle:{
                        type:'string',
                        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                        description:"Talle del producto",
                        example:"S"
                    },
                    precio:{
                        type:'number',
                        description:"Precio del producto",
                        example:40
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Fecha de creación del producto',
                        example: '2025-06-13T15:30:00.000Z'
                    },
                        updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Fecha de última actualización del producto',
                        example: '2025-06-13T15:45:00.000Z'
                    },

                }
            }
        }
    }
}
