const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b3ba5945a2a9e344c89183f';

/*var id = '5b40ce3574801a1fb4155e23bb';
if(!ObjectID.isValid()){
  console.log('ID not valid');
}*/
/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos : ', todos);
  //if not found return empty array
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo One : ', todo);
  //if not found return null
});
*/
/*Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo By Id : ', todo);
  //if not found return null
}).catch((e) => console.log(e));*/

User.findById(id).then((user) => {
 if(!user){
   return console.log('Unable to find user');
 }
 console.log(JSON.stringify( user, undefined, 2));
}).catch((e) => console.log(e));
