const User = require("../models/User");

const userController = {
  register: async function (req, res) {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    try {
      const savedUser = await user.save();
      res.send(savedUser)
    } catch (err) {
     res.status(400).send(err)
    }
  },
  
  
  login: function (req, res) {
    console.log("login");
    res.send("Login");
  },
};

module.exports = userController;
