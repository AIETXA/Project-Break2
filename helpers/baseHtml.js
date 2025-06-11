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
          background-color: rgb(245, 221, 210);
          color: black;
        }

        header {
          background-color: orange;
          color: black;
          padding: 15px 30px;
        }

        .naranja {
          font-size: 1.5rem;
          font-weight: bold;
        }

        nav {
          display: flex;
          gap: 15px;
          background-color: rgb(72, 64, 64);
          padding: 10px 20px;
        }

        nav a {
          color: rgb(245, 245, 245);
          text-decoration: none;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 5px;
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
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
}

.carta-producto img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

    .btn, button {
      background-color: #f84d00;
      color: white;
      padding: 10px 15px; /* <-- más alto y ancho */
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      text-decoration: none;
      font-size: 1rem;
      display: inline-block;
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
        <div class="naranja">La naranja no se mancha</div>
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