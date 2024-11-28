const express=require('express');
const { handleCreateUser, handleUserLogin, handleUserAuth } = require('../controllers/user');
const userRouter=express.Router();


userRouter.route('/user')
.post(handleCreateUser);

userRouter.route('/')
.get(handleUserLogin);

userRouter.route('/login')
.post(handleUserAuth);

module.exports={
    userRouter,
}