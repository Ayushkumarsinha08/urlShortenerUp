const { url } = require('../model/url');
const {user,schema}=require('../model/user')
// const {v4:uuidv4}=require('uuid');
const { setUser } = require('../services/auth');

async function handleCreateUser(req,res){
    const name=req.body.Username;
    const urls = await url.find();
    await user.create({
        name:name,
        password:req.body.password,
        email:req.body.email,
    })
    return res.render('home',{name:name,url:urls});
}
 function handleUserLogin(req,res){
    return res.render('user');
}
async function handleUserAuth(req, res) {
    try {
        const userFound = await user.findOne({ name: req.body.userId, password: req.body.password });
        
        if (!userFound) {
            return res.status(401).send("Invalid username or password.");
        } 
        // const sessionId=uuidv4();
        const token=setUser(userFound);
        res.cookie('uid',token);
        return res.render('home',{url:url});
    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).send("An internal server error occurred.");
    }
}


module.exports={
    handleCreateUser,
    handleUserLogin,
    handleUserAuth,
}