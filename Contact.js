import { Schema,model } from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:30
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    }
})


const Contact = model('Contact',contactSchema)

export default Contact