const express=require('express');
const router=express.Router();

const patientController=require('../controllers/patient_controller');
const reportController=require('../controllers/reports_controller')

router.post('/create_patient',patientController.create_patient);
router.post('/create_report',reportController.create_report);
router.get('/:id/all_reports',reportController.all_report);

module.exports=router


