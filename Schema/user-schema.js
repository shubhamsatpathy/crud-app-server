import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        fullName:String,
        email:String,
        phoneNumber:String,
        age:String,
       
})

const user = mongoose.model('user', userSchema)

export default user

