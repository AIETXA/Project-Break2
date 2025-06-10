const esRutaAdmin = (req) => req.originalUrl.startsWith('/dashboard');

module.exports = esRutaAdmin;