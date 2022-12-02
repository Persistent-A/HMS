const asyncHandler = require('express-async-handler')

const Appointment = require('../model/appointmentModel')
const User = require('../model/doctorModel')

const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({ department: req.doctor.department })

    res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add all the fields')
    }
    const appointment = await Appointment.create({
        // user: req.user.id,
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        date: req.body.date,
        department: req.body.department
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