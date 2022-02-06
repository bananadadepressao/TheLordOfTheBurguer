const autenticacaoMiddleware = function (req, res, next)  {
  
  if(typeof req.session.TheLordOfTheBurguerAdminUser == "undefined"){
    res.redirect("/login");
    return;

  }
  if (true)
   {
       next();
    }
}

module.exports = autenticacaoMiddleware;