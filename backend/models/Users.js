const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const UserModel=mongoose.model('user',UserSchema);

module.exports=UserModel

// const mongoose = require("mongoose");

// const UserModel = mongoose.model("user", {
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// module.exports = UserModel;
