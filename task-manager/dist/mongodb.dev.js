"use strict";

// CRUD = create read update delete datas
var _require = require('mongodb'),
    MongoClient = _require.MongoClient,
    ObjectID = _require.ObjectID,
    Db = _require.Db;

var connectionURL = 'mongodb://127.0.0.1:27017';
var databaseName = 'task-managerDB'; // const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {
  useNewUrlParser: true
}, function (error, client) {
  if (error) {
    return console.log('unable connect to MongoDB Server!');
  }

  var db = client.db(databaseName); // db.collection('user').insertOne({
  //     _id: id,
  //     name: 'Victor',
  //     age: 26
  // }, (error, result) => {
  //     if (error) {
  //         return console.log('Unable to insert user')
  //     }
  //     console.log(result.ops)
  // })
  // db.collection('user').insertMany([{
  //         name: 'Jane',
  //         age: 20
  //     },
  //     {
  //         name: 'John',
  //         age: 21
  //     },
  //     {
  //         name: 'Juy',
  //         age: 52
  //     }
  // ], (error, result) => {
  //     if (error) {
  //         return console.log('Unable to inserting datas');
  //     }
  //     console.log(result.ops)
  // })
  // db.collection('user-tasks').insertMany([
  //     {
  //         description: 'play a game',
  //         complete: true
  //     },
  //     {
  //         description: 'study Node.JS',
  //         complete: false
  //     },
  //     {
  //         description: 'have a girlfriend',
  //         complete: false
  //     },
  // ],(error,result)=>{
  //     if(error){
  //         return console.log('Unable to insert datas')
  //     }
  //     console.log(result.ops)
  // })
  // db.collection('user-tasks').find({
  //     complete:true
  // }).toArray((error,task)=>{
  //     if(error){
  //         return console.log('error')
  //     }
  //     console.log(task)
  // })
  // db.collection('user-tasks').findOne({
  //     _id: new ObjectID("606ae005d65c2b0b5854e8fd")
  // },(error,task)=>{
  //     if(error){
  //         return console.log('error by query')
  //     }
  //     console.log(task);
  // })
});