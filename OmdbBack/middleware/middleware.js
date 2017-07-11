


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // puede pasar
  }
  return res.send('<img src="https://i.ytimg.com/vi/qdYifXP5tVA/maxresdefault.jpg"/>');
}

module.exports = isLoggedIn;
