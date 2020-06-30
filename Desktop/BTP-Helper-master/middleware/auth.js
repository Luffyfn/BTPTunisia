const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //Check Token
    if(!token) return res.status(401).json({msg: "Authorization denied"});

   try {
       //Verify token
       const decoded = jwt.verify(token, config.get('jwtSecret'));
       //Add moe from payload
       req.user = decoded;
       next();
   } catch (error) {
       res.status(400).json({msg: "Token isn't valid"})
   }
}

module.exports = auth;
