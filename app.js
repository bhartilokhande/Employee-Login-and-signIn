const express = require('express');
const app = express();
const empoloyeeRouter = require('./api/router/employee')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


//connection with database
mongoose.connect('mongodb://localhost:27017/employeeInfo')
mongoose.connection.on('error',err => {
    console.log('connection failed');
});
mongoose.connection.on('connected',connected => {
    console.log('connection success');
})



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/employee',empoloyeeRouter);
// app.use('/',empoloyeeRouter);
// app.use('/SortName',empoloyeeRouter);




app.use((req,res,next) => {
    res.status(200).json({
       msg:'app in ruunginh'
    })
})


module.exports = app;
