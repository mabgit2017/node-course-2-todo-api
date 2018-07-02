const {MongoClient, ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
      /*db.collection('Todos').deleteMany({text: 'Eat Lunch'})
      .then((result) => {console.log(result);});*/

     /* db.collection('Users').deleteMany({name: 'Andrew'})
      .then((result) => {console.log(result);});*/

  // deleteOne
        /*db.collection('Todos').deleteOne({text: 'Eat Lunch'})
        .then((result) => {console.log(result);});*/

  // findOneAndDelete
        /*db.collection('Todos').findOneAndDelete({completed: false})
        .then((result) => {console.log(result);});*/

        /*db.collection('Users').findOneAndDelete({_id:new ObjectID("5b398ebb0037eee4851e4fd1")})
        .then((result)=>{console.log(JSON.stringify(result, undefined, 2));});*/
 
  // db.close();
 
});