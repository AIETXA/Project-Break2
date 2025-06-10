

function protegerRuta(req, res, next) {
  if (req.session && req.session.authenticated) {
    return next();
  }

  res.redirect('/login?error=2');
}

module.exports = protegerRuta;

