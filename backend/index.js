const express = require("express");
const mongoose = require("mongoose");
// const create = require("./createrecords");
const User = require("./models/User")
const cors = require("cors");

const app = express()
app.use(cors())
mongoose.connect(
    'mongodb://localhost:27017/test',
    {
        useNewUrlParser: true,
        autoIndex: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) {
            console.log(`Unable to Connect to Database. ${err.name} ${err.message}`);
            process.exit(1);
        } else {
            console.log(new Date());
            console.error("Successfully connected to Database");
        }
    }
)
//create()
app.get("/users", (req, res) => {
    console.log("new req")
    User.find({}).exec()
        .then(users => {
            return res.send(users)
        })
        .catch(err => {
            return res.status(500).send({ message: "Error!" })
        })
})

app.listen(9001, () => {
    console.log("App listening at port 9001");
})