function baseHtml(content, menu = '') {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>La naranja no se mancha</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-image: url('https://res.cloudinary.com/ddtqzg7w9/image/upload/v1749713999/PELOTA_FONDO_n10ary.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: black;
        }

        header {
          background-color:rgba(248, 79, 0, 0.8);
          color: black;
          padding: 15px 30px;
        }

        .naranja {
          font-family: Arial, Helvetica;
          font-size: 1.5rem;
          font-weight: bold;
          text-shadow: .5px .5px rgba(252, 249, 248, 0.88);
        }

        nav {
          display: flex;
          gap: 15px;
          background-color: rgba(72, 64, 64, 0);
          padding: 10px 20px;
        }

        nav a {
          color: rgb(245, 245, 245);
          text-decoration: none;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 5px;
        }
        
        nav .inicio {
          border-radius: 5px;
          border: 1px solid rgba(252, 249, 248, 0.88);
         }
        
        nav a:hover {
          background-color: rgba(248, 79, 0, 0.67);
          color: white;
          }
          

        main {
          padding: 30px;
        }

       .grilla-productos {
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* 5 productos por fila */
        gap: 20px;
        padding: 20px;
      }

      .carta-producto {
        background-color: white;
        color: black;
        padding: 20px;
        border: 1px solid #ccc;
        text-align: center;
        border-radius: 5px;
      }

      .carta-producto img {
        width: 100%;
        height: 200px;
        margin: -5px;
        object-fit: cover;
        border-radius: 5px;
      }

      .btn, button {
        background-color: #f84d00;
        color: white;
        padding: 8px 8px; 
        border: none;
        border-radius: 5px;
        margin-top: 5px;
        cursor: pointer;
        text-decoration: none;
        font-size: 1rem;
        
      }
      
    


        @media (max-width: 1024px) {
          .grilla-productos {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grilla-productos {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .grilla-productos {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <div class="naranja">LA NARANJA NO SE MANCHA</div>
      </header>

      ${menu ? `<nav>${menu}</nav>` : ''}

      <main>
        ${content}
      </main>
    </body>
    </html>
  `;
}

module.exports = baseHtml;