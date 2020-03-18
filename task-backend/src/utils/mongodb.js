const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const client = new MongoClient(url);

const insert = (task) => {
    MongoClient.connect(url,{useNewUrParser:true}, (error,client)=>{
        if(error){
            console.log('error: ',error);
        }
        const db = client.db(databaseName);
        db.collection('tasks').insertOne(task);
        client.close();
    })
} 

module.exports = {insert};