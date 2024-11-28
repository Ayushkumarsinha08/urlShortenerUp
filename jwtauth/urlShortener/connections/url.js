const mongoose=require('mongoose');

module.exports.handleConnection=function(url){
    mongoose.connect(url)
    .then(()=>{console.log('mongodb connected')})
    .catch(err => console.error('Could not connect to MongoDB', err));
};