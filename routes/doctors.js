const express=require('express');

const router=express.Router();
const usersController=require('../controllers/users_controller')

router.get('/profile',usersController.profile);


router.post('/create',usersController.create)
router.post('/create_session',
usersController.create_session)

module.exports=router