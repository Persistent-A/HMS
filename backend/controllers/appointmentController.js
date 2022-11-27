const asyncHandler = require('express-async-handler')

const getAppointments = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Appointments'})
})

const setAppointment = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set Appointments'})
})

const updateAppointment = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Appointments ${req.params.id}`})
})

const deleteAppointment = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Appointments ${req.params.id}`})
})

module.exports = {getAppointments, setAppointment, updateAppointment, deleteAppointment}