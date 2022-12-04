import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import {BsCalendarDateFill} from 'react-icons/bs'
import ReSchedule from './ReSchedule'
import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../features/auth/authSlice'
import Box from '@mui/material/Box'
import { Cursor } from 'mongoose'

const PatientDetailsCard = ({appointment, selectedDate}) => {
  const [isRescheduled, setIsReschedule] = useState(false)

  const toggleReminder = () => {
    setIsReschedule(!isRescheduled)
  }

  const dispatch = useDispatch()

  return (
    
    <Box sx={{backgroundColor: isRescheduled ? "green" : "#efcc4f", margin:"30px", padding:"20px"}}>
      <h3>Name: {appointment.name} <FaTimes style={{float: "right", cursor: "pointer"}} onClick={() => dispatch(deleteAppointment(appointment._id))}/></h3>
      <h3>Age: {appointment.age}</h3>
      <h3>Email_Address: {appointment.email}</h3>
      <BsCalendarDateFill onClick={() => toggleReminder(appointment.id)}/>
      {isRescheduled && <ReSchedule appointment={appointment} selectedDate={selectedDate}/>}
    </Box>
  )
}

export default PatientDetailsCard
