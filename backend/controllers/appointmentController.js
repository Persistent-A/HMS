const asyncHandler = require('express-async-handler')

const Appointment = require('../model/appointmentModel')

const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find()

    res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const appointment = await Appointment.create({
        text: req.body.text
    })

    res.status(200).json(appointment)
})

const updateAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)

    if(!appointment){
        res.status(400)
        throw new Error('Appointment not found')
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedAppointment)
})

const deleteAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)

    if(!appointment){
        res.status(400)
        throw new Error('Appointment not found')
    }

    await appointment.remove()


    res.status(200).json({ id: req.params.id})
})

module.exports = {getAppointments, setAppointment, updateAppointment, deleteAppointment}