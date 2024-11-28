const { getUser } = require("../services/auth");

async function restrictToLoggedInUserOnly(req,res,next){
    const userId=req.cookies.uid;

    if(!userId){
        return res.render("user")
    }
    const user=await getUser(userId);
    if(!user){
       return res.render('user');
    }
    req.user=user;
    next();

}

module.exports={
    restrictToLoggedInUserOnly,
}