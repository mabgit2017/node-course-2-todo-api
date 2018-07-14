const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b3ba5945a2a9e344c89183f';

/*  removing everything returning only the number of documents removed
Todo.remove({}).then((result) => {
  console.log(result);
}); */

// find one first document remove and return it

Todo.findOneAndRemove({_id: '5b41f8634c6ef73e64fe8121'}).then((todo) => {});

Todo.findByIdAndRemove('5b41f8634c6ef73e64fe8121').then(
(todo) => {console.log(todo);}
);