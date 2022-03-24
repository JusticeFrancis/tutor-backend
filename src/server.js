const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require('./routes/userRouter');
const bodyParser = require('body-parser');  


const app = express()
const port = 5000;

app.use('/', usersRouter);
app.use('/users', usersRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(process.env.PORT || port, () => {
    console.log(`Now listening `);
}); 

mongoose.connect("mongodb+srv://jessica:Justicefrancis1$@cluster0.tuqzm.mongodb.net/tutor_backend?retryWrites=true&w=majority")
const db = mongoose.connection
db.on('error',(error)=> console.log(error))
db.once('open',()=> console.log('connected to database'))