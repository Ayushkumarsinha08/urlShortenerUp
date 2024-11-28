const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
    },
    shortID:{
        type:String,
        required:true,
        unique:true,
    }
});

const url=mongoose.model('url',schema);

module.exports={
    schema,
    url,
}