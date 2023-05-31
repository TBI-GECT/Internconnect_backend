const mongoose = require('mongoose')
const adminData = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: /^\S+@\S+\.\S+$/
    },
    password:{
        type:String,
        required:true,
        minlength:6,

    }
});
module.exports = mongoose.model('adminTable',adminData)