const basicInfo = require('./basicInfo');
const componentes = require('./componentes');
const productos = require('./productos');
module.exports = {
    ...basicInfo,
    ...componentes,
    ...productos
};
