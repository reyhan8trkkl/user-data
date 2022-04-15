const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user_id:Schema.Types.ObjectId,
    name:{type:String,maxlength:[60],minlength:[1]},
    email:{type:String,maxlength:[60],minlength:[1]},
    company:{type:String,maxlength:[60],minlength:[1]},
    address:{type:String,maxlength:[200],minlength:[1]},
    phone:{type:String},
    username:{type:String,maxlength:[60],minlength:[1]},
    website:{type:String,maxlength:[60],minlength:[1]}
})
module.exports = mongoose.model('users',UserSchema)