# PROJECT BREAK 2

## Descripción
API y front-end para gestión de productos relacionados con ropa y accesorios de básquet. 

Permite: 
- Crear, listar, editar y eliminar productos.
- Consultar productos a través de la API.
- Subida de imágenes a Cloudinary.
- Autenticación de usuario con sesion.
- Documentación de API con Swagger. 

## Interfaces disponibles

- `/products`: Vista pública para ver productos (usuarios)
- `/dashboard`: Vista privada para gestión de productos (admin, requiere login)

## Requisitos previos
- Se necesita tener o crear una cuenta en MongoDB Atlas y tambien en Cloudinary.

## Puesta en marcha
Para poder llevar a cabo este proyecto vamos a utilizar las siguientes tecnologías.

- Node.js
- Express 
- MongoDB con Mongoose
- Cloudinary (para subir imágenes)
- express-session (para sesiones)
- swagger-ui-express (documentación API)
- dotenv (variables de entorno)
- method-override (soporte PUT/DELETE en formularios HTML)

# 1 - Instalación y puesta en marcha(en Git Bash)

Clonar el repositorio:
    git clone https://github.com/AIETXA/Project-Break2.git
    cd Project-Break2

# 2- Instalar dependencias(en la terminal):
    npm install 


# 3 - Crear el archivo .env en la raíz con las siguientes variables de entorno. 

    MONGO_URI=tu_cadena_de_conexion_mongodb
    API_KEY=tu_api_key_cloudinary
    CLOUDINARY_URL=tu_url_cloudinary
    CLOUD_NAME=tu_nombre_cloudinary
    API_SECRET=tu_api_secret_cloudinary
    AUTH_USER=usuario_admin
    AUTH_PASS=contraseña_segura
    SESSION_SECRET=clave_secreta_sesion

# 4 - Iniciar la aplicacion.
    npm start

## Autenticación

Para acceder a las rutas protegidas (/dashboard) se requiere iniciar sesión con un usuario definido en las variables de entorno (`AUTH_USER` y `AUTH_PASS`).  
La sesión se mantiene con cookies una vez iniciada.  
Ruta de login: `http://localhost:3000/login`

# Estructura. 

project-break2/
├── config/
│   ├── bbdd.js
│   └── cloudinaryConfig.js
├── controllers/
│   ├── authControlador.js
│   ├── controladorAPIProductos.js
│   └── controladorProductos.js
├── docs/
│   ├── basicInfo.js
│   ├── componentes.js
│   ├── index.js
│   └── productos.js
├── helpers/
│   ├── barraNavegacion.js
│   ├── baseHtml.js
│   ├── esRutaAdmin.js
│   ├── formProducto.js
│   ├── grillaDeProductos.js
│   └── tarjetaDelProducto.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── Products.js
├── node_modules/
├── routes/
│   ├── authRutas.js
│   ├── carritoRuta.js
│   ├── rutasAPIproductos.js
│   └── rutasProductos.js
├── .env/
├── .gitignore/
├── index.js/
├── package-lock.json/
├── package.json/
└── README.md/



## Esta API ofrece los siguientes endpoints:
RUTAS PUBLICAS (sin autenticación)

GET	    /products	            Listar todos los productos	    
GET	    /products/:productoId	Obtener detalle del producto por ID	        


RUTAS PRIVADAS/ADMINISTRADOR (con autenticación)
Estas rutas están protegidas por middleware protegerRuta y se usan para gestionar productos desde el panel administrador.

GET     /dashboard                          Listar todos los productos     
GET 	/dashboard/nuevo	                Mostrar el formulario para crear un nuevo producto	
POST    /dashboard/nuevo                    Crear un producto    
GET     /dashboard/:productoId              Mostrar detalle de un producto
GET     /dashboard/:productoId/editar       Mostrar el formulario para editar un producto
PUT	    /dashboard/:productoId	            Actualizar producto 	    
DELETE	/dashboard/:productoId	            Eliminar producto 	    

## Para probar la API con ejemplos:
    
Lista todos los productos = `GET http://localhost:3000/products`

Crear un producto(requiere autenticacion) = `POST http://localhost:3000/dashboard/nuevo`  

## Documentacion de la API

Para consultarla puedes entrar en http://localhost:3000/api-docs

## Licencia

Este proyecto fue creado por [AIETXA](https://github.com/AIETXA)  y es de uso libre para fines educativos o personales
