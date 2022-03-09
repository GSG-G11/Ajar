const logout = (req, res) => {
  res.status(200).clearCookie().redirect('/');
};

module.exports = logout;
