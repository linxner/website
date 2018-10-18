const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema({
    email:String,
    password:String,
    residence:Array,
    nickname:String,
    phone:String,
    website:String,
    date:String,
    agreement:Boolean
})
module.exports=userSchema