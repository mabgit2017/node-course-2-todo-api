//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
// ***************Mongodb3
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  // **************Mongodb3
  // const db = client.db('TodoApp');
              /*db.collection('Todos').insertOne({
                text: 'Something to do',
                completed: false
              }, (err, result) => {
                  if(err){
                    return console.log('Unable to insert todo',err);
                  }
                  console.log(JSON.stringify(result.ops,undefined,2));
                });*/
  /*db.collection('Users').insertOne({
    name: 'Blue Jean',
    age: 35,
    location: 'Hamburg'
  }, (err,result) =>{
    if(err){
      return 'Could not insert document in Users'
    }
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });*/
  db.close();
  // ************Mongodb3
  // client.close();
});