const jwt = require('jsonwebtoken');

const routProtector = (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  jwt.verify(req.cookies.token, 'secretkeyfromenvfile', (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: 'not auth' });
    } else {
      next();
    }
  });
};
module.exports = routProtector;
