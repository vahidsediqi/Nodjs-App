const dbConnection = require('./dbConnection')

const insertData = async () => {
  let db = await dbConnection();
  const newData = db.insertOne(
     {
        ProductTitle: 'Gaming Headphone',
        price: '$50',
        details: 'Gaming Headphone with wonderful conditions available to ship any part of the word' 
     }
  )
  
  
}

insertData()

module.exports = insertData