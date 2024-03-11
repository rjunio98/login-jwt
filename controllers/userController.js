const userController = {
  register: function register(req, res) {
    res.send("Register");
  },

  login: function login(req, res) {
    res.send("Login");
  },
};

module.exports = userController;
