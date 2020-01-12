const { Client, Pool } = require('pg')
require("dotenv").config({ path: "bugTrackerApi/.env" });
// const connectionString = `postgressql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`


const client = new Pool({
    user: 'postgres',
    host: process.env.DB_HOST,
    database: 'bugtracker',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  })
// const client = new Client({
//     connectionString: connectionString
// })

client.connect((err, result) => {
    if (err)
        console.log(err)
    else 
     console.log("connected to postgres")
})


module.exports = client