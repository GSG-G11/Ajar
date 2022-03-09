const jwt = require('jsonwebtoken');

const routProtector = (req, res, next) => {
  jwt.verify(req.cookies.token, 'secretkeyfromenvfile', (err, decoded) => {
    console.log(req.cookies.token);
    if (err) {
      res.status(401).json({ msg: 'not auth' });
    } else {
      next();
    }
  });
};
module.exports = routProtector;
