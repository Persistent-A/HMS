const asyncHandler = require('express-async-handler')

const Appointment = require('../model/appointmentModel')
const User = require('../model/userModel')

const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ user: req.user.id })

    res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const appointment = await Appointment.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(appointment)
})

const updateAppointment = asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)

    if(!appointment){
        res.status(400)
        throw new Error('Appointment not found')
    }

    const user = await User.findById(req.user.id)

    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the loggin user matches the appointment user
    if(appointment.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
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
    const user = await User.findById(req.user.id)
      //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the loggin user matches the appointment user
    if(appointment.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await appointment.remove()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {getAppointments, setAppointment, updateAppointment, deleteAppointment}