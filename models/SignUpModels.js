const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    
    
    firstName:{
        type:String,

        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: /^\S+@\S+\.\S+$/
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        match: /^\+?[1-9]\d{1,14}$/
    },
    college:{
        type:String,
        require:true
    },
    github:{
        type: String,
        required: false,
        
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    },
    linkedin:{
        type: String,
        required: true,
        
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    webdev:{
        type:Boolean,
        default: false
    },
    appdev:{
        type:Boolean,
        default: false
    },
    
    ml:{
        type:Boolean,
        default: false
    },
    ai:{
        type:Boolean,
        default: false
    },
    embedded:{
        type:Boolean,
        default: false
    },
    mech:{
        type:Boolean,
        default: false
    },
    java:{
        type:Boolean,
        default: false
    },
    springboot:{
        type:Boolean,
        default: false
    },
    javascript:{
        type:Boolean,
        default: false
    },
    solidwork:{
        type:Boolean,
        default: false
    },
    autocad:{
        type:Boolean,
        default: false
    }, 
    sales:{
        type:Boolean,
        default: false
    }, 
    marketing:{
        type:Boolean,
        default: false
    }, 
    other:{
        type:String,
        // required:true
    },
    resume: {
        type: String,
        required: true,
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
      },
  
      date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('Registrations',signUpTemplate)

