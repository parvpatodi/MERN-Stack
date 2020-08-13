const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;               //accessing a required model from the entire code base of mongodb
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
var db;
//connecting to a local mongodb and the below is a connection string
MongoClient.connect(" mongodb://127.0.0.1:27017/Star_Wars2",
    { useUnifiedTopology: true },
    (err,client) =>  {
    if (err) return console.error(err)
    console.log(client)
    console.log("connected successfully to database")
    db = client.db()
})
//Routes

app.get('/', (req, res) => {
    const cursor = db.collection("quotes").find().toArray()
        .then(results => {
            console.log(results)
        })
    //console.log(cursor);
    //res.send("Get request received...")
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes',(req, res) => {
    const quotesCollection = db.collection('quotes')
    quotesCollection.insertOne(req.body).then(result => {
        //console.log(result)
        res.redirect('/')
    })
    .catch(error => console.error(error))
    // console.log(req.body)
    // console.log("Reached the quotes...")
})

//Starting the server

app.listen(PORT,() => {
    console.log("Server has been started")
})