module.exports = function(req, res, next) {
    // If logged in, call next()
    if ( req.isAuthenticated() ) return next();
    // Bad user -  tried to access a protected route
    res.redirect('/auth/google');
  };