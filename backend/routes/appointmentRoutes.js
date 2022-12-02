const express = require('express')
const router = express.Router()
const {getAppointments, setAppointment, updateAppointment, deleteAppointment} = require('../controllers/appointmentController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(setAppointment).get(protect, getAppointments)

// router.route('/:id').put(protect, updateAppointment).delete(protect, deleteAppointment)

module.exports = router