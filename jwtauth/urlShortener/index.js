const express=require('express');
const { json, urlencoded } = require('body-parser');
const {handleConnection}=require('./connections/url');
const path=require('path');
const { router } = require('./routes/url');
const {userRouter}=require('./routes/user');
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly } = require('./middlewares/auth');

const app=express();

app.use(json());
app.use(urlencoded({extended:false}));
app.use(cookieParser());
app.set("view engine","ejs");
app.set("views",path.resolve("./urlShortener/views"))

handleConnection('mongodb://localhost:27017/url-shortener');

app.post('/',router);
app.get('/urls',restrictToLoggedInUserOnly,router);
app.get('/:id',restrictToLoggedInUserOnly,router);
app.get('/',userRouter);
app.post('/user',userRouter);
app.post('/login',userRouter);

app.listen(3000,console.log('server start'));
