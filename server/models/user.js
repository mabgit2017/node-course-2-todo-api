var mongoose = require('mongoose');
var User = mongoose.model('User', {
  firstname:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  lastname:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  age: {
    type: Number,
    default: null
  }
});
module.exports = {User};
/*var newUser = new User({
  lastname: '  Greg ',
  firstname: 'Vincent  ',
  email: '   vincent.greg@gmail.com   '
});
newUser.save().then((doc) => {console.log(JSON.stringify(doc, undefined, 2))}, (e) =>{console.log('Unable to save user ',e);});
*/