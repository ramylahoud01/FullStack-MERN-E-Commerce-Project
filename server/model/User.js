import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    posts:[
    {
        type:Schema.Types.ObjectId,
        ref:'Post'
    }
    ]
})

export default mongoose.model('User',UserSchema)