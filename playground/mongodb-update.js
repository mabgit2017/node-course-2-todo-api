const {MongoClient, ObjectID} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');

     /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b3927bd0037eee4851e4ce6")
      },{
        $set: {
          completed: true
        }
      },{
        returnOriginal: false
      })
      .then((result) => { console.log(result);});*/
  db.collection('Users').findOneAndUpdate({
      _id : new ObjectID("5b398d410037eee4851e4f3b")
  },{
    $inc: {age:-1},
    $set: {name: 'Andrea'}
  },{
    returnOriginal:false
  })
  .then((result) => { console.log(JSON.stringify(result, undefined, 2));});
 
  // db.close();
 
});