

function baseHtml(content, menu = '') {
  

 return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>La naranja no se mancha</title>
        </head>
        <body> 
            ${menu}
        <main>
            ${content}
        </main> 
        </body>
        </html>`;
}

module.exports = baseHtml;