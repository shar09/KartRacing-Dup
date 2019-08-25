const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport.js");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/login")
  .post(function(req, res, next) {
    console.log("logging in user: ", req.body);
    next();
  }, passport.authenticate("local"), usersController.login)

router.route("/register")
  .post(usersController.register)

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;