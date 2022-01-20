const autenticacaoMiddleware = (req, res, next) => {

  if (true)
   {
        next();
        return;
    }
    res.redirect("/");
}

module.exports = autenticacaoMiddleware;