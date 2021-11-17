const mongoose = require('mongoose');

//create employee schema(collection)

const employeeSchema =  new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    mobile:Number,
    address:String,
    salary:Number,
    department:String,
    jobTitle:String,
    birthDate:Number,
    pinCode:Number
})

module.exports = mongoose.model('emplyee_info',employeeSchema)