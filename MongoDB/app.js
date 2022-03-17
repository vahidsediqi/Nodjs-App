const dbConnection = require('./dbConnection')
const insertData = require('./insertData')
// dbConnection().then(res => {
//   res.find().toArray().then(data => console.log(data))
// })

const main = async () => {
    let data = await dbConnection()
    data = await data.find().toArray()
    console.log(data)
}

main()
