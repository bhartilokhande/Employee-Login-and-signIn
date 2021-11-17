const express = require('express');
const router = express.Router();
const Employee = require('../model/employeeDb');
const mongoose = require('mongoose');



//api for get data 
router.post('/addData', (req, res, next) => {
   
    // console.log(req.body);
    // res.status(200).json({
    //     msg:"data get"
    // })
     //save in database
    const employee = new Employee({
        _id: new mongoose.Types.ObjectId,
        name:req.body.name ,
        mobile:req.body.mobile ,
        address:req.body.address ,
        salary:req.body.salary ,
        department:req.body.department ,
        jobTitle:req.body.jobTitle ,
        birthDate:req.body.birthDate ,
        pinCode:req.body.pinCode 
    })
    employee.save() //mongodb funtion
    .then(result =>{
        console.log(result);
        res.status(200).json({
            newEmployee:result,
            msg:'data save successfully'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    
})

//api for find data by id
router.get('/find/:id',(req,res,next)=>{
    // res.status(200).json({
    //     msg:'get req running'
    // })
    // console.log(req.params.id)
    Employee.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            employee:result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

//api for sort data by salary
router.get('/sortSalary',(req,res,next)=>{
    // res.status(200).json({
    //     msg:'api for sort salary'
    // })
    Employee.find().sort({salary:-1})
    .then(result => {
        res.status(200).json({
            salary:result
        })
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    })
})

//api for sort data by name
router.get('/SortName',(req,res,next)=> {
    Employee.find().sort({name:1})
    .then(result => {
        res.status(200).json({
            name:result
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
})

// api for update data

router.put('/update/:id',(req,res,next) => { 


    Employee.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name ,
            mobile:req.body.mobile ,
            address:req.body.address ,
            salary:req.body.salary ,
            department:req.body.department ,
            jobTitle:req.body.jobTitle ,
            birthDate:req.body.birthDate ,
            pinCode:req.body.pinCode 
        }
    })
    .then(result => {
        res.status(200).json({
            msg:"data update succfully",
            updata_data:result
        })
    })
    .catch(err => {
        res.status(500).json({
            msg:"not update",
            error:err
        })
    })
})

module.exports = router;