const express=require('express');
const router=express.Router();

const reportController=require('../controllers/reports_controller')

router.get('/:status',reportController.status)

module.exports=router