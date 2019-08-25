var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
        email: email
    }).then(function(dbUser) {
      if(!dbUser){
        console.log("no email")
        return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
      }
      // This is asynchronous to prevent timing based attacks
      return dbUser.checkPassword(password).then(isCorrect => {
          if(!isCorrect){
            console.log("wrong password")
              return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
          } else {
              // All good, proceed
        console.log("all good")
              return done(null, dbUser)
          }
      })
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

