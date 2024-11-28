const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
});

const user=new mongoose.model("user",schema);

module.exports={
    user,
    schema,
}