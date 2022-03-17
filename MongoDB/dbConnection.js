const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()
app.set('view engine', 'ejs')
// specify da database name here
const dburl = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(dburl);

// connecting to MongoDb Database
const  dbConnection = async () => {
    let connection = await client.connect()
    // specify da database here
    const database = connection.db('e-comm')
   // specify da collection or table here and returning the product collection
    return database.collection('products')

}

module.exports = dbConnection;