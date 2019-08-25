const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  lap_time: { type: Number, default: 0},
  wins: { type: Number, default: 0},
  losses: { type: Number, default: 0}
});

UserSchema.methods.checkPassword = function(password){
  return bcrypt.compare(password, this.password)
}

UserSchema.pre('save', function(next){
  if(!this.isNew){
      return Promise.resolve()
  }
  return bcrypt.genSalt(10).then(salt => {
      return bcrypt.hash(this.password, salt)
  }).then(hash => {
      this.password = hash
      return Promise.resolve()
  })
});

const User = mongoose.model("User", UserSchema);

module.exports = User;