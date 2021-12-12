import app from "./server"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.ATLAS_URI,
    {
        poolSize: 50, //how time to connect with mongodb at same time
        wtimeout: 2500, // request timeout for mongodb
        useNewUrlParse: true
    }
).catch(err => {
    console.log(err.stack);
    process.exit(1);
}).then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})

