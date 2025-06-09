

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
    background-color:  #f84d00;
    color: white;
  }

  header {
    background-color: #111;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .naranja {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f84d00;
  }

  nav {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  nav a {
    color:  #f84d00;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 12px;
    
  }

  nav a:hover {
    background-color: #f84d00;
    color: white;
    border-radius: 5px;
  }

  main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .carta-producto {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    text-align: center;
   
  }

  .carta-producto:hover {
    transform: scale(1.02);
  }

  .carta-producto img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .btn, button {
    background-color: #f84d00;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  .btn:hover, button:hover {
    background-color: #d74200;
  }

  form label {
    display: block;
    margin: 10px 0 5px;
  }

  input[type="text"],
  input[type="number"],
  textarea,
  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  section {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin: 20px auto;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    nav {
      flex-direction: column;
      gap: 10px;
    }

    header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

    </head>
        
    <body> 
        <header> 
        <div class="naranja">La naranja no se mancha</div>
        ${menu}
     </header>
        <main>
            ${content}
        </main> 
        </body>
        </html>`;
}

module.exports = baseHtml;