const UserModel = require("../models/User");
class user {
  add(req, res, next) {
    var user = req.body;
    UserModel.create(user)
      .then((result) => res.json(result))
      .catch(next);
  }
  check(req, res, next) {
    var user = req.body;
    try {
      UserModel.findOne({ _id: user.id, code: user.code })
        .then((result) => {
          if (result) {
            res.json(result);
          } else {
            res.json({ error: "User not found" });
          }
        })
        .catch(next);
    } catch (error) {
      res.json({ error: "User not found" });
    }
  }
}
module.exports = new user();
