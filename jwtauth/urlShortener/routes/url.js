const express=require('express');
const router=express.Router();
const { handleCreateId, handleGeturls, handleGetUrlById } = require('../controllers/url');
const { restrictToLoggedInUserOnly } = require('../middlewares/auth');


router.route('/',restrictToLoggedInUserOnly)
.post(handleCreateId);

router.route('/urls')
.get(handleGeturls);

router.route('/:id')
.get(handleGetUrlById);

module.exports={
    router,
}