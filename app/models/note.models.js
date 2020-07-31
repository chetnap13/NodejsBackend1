const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name:String,
    city:String,
    age:Number,
    DOB:Date
},{
    timestamps:true
})

module.exports = mongoose.model('User',UserSchema)