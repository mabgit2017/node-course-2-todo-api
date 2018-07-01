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
  //db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  db.collection('Todos').find({
    _id: new ObjectID('5b38b34461804c1b5cd09dd8')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch todos ',err)
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count : ${count}`);
  },(err) => {
    console.log('Unable to fetch todos ',err)
  });
  db.collection('Users').find().count().then((count) => {console.log(`Users count : ${count}`);},
(err) => {
  console.log('Unable to fetch users',err);
});
db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) =>{
  console.log('Andrew :');
  console.log(JSON.stringify(docs, undefined,2));
},(err) =>{
    console.log('Unable to fetch Andrew ',err);
  }
);
  //db.close();
  // ************Mongodb3
  // client.close();
});