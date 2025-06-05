const { menuPublico } = require('./menuPublico');
const { menuDashboard } = require('./menuDashboard');

function baseHtml(content, isDashboard = false) {
    const menu = isDashboard ? menuDashboard() : menuPublico();

 return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>La naranja no se mancha</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                .product-card { border: 1px solid #ccc; padding: 10px; margin: 10px; width: 200px; display: inline-block; vertical-align: top; }
                 .product-card img { width: 100%; height: auto; }
                nav a { margin: 0 10px; }
            </style>
            
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