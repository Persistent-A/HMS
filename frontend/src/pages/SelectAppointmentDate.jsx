import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import PatientDetailsCard from "../components/PatientDetailsCard"
import {doctorsAppointments} from '../features/auth/authSlice'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function SelectAppointmentDate() {
    
    const [selectedDate, setSelectedDate] = useState('')
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const { appointments } = useSelector((state) => state.auth)


    const showPatientDetails = (e) => {
        e.preventDefault()
        dispatch(doctorsAppointments({date: selectedDate}))
    }

  return (
    <>
        <Box component="form" onSubmit={showPatientDetails} sx={{ width:"50%", padding: "30px", display: "flex", flexDirection:"column", alignItems:"center", margin:"10px auto"}}>
                <h1>Welcome to your scheduled appointment</h1>
                <div className='doctorportal-form-row'>
                    <label>Select date of appointment:</label>
                    <input type='date' value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" sx={{width:"50%", margin: "50px"}} type='submit'>Click to Check</Button>
        </Box>
        <Box sx={{ border:"1px solid grey",  padding: "30px", display: "flex", flexDirection:"row", alignItems:"space-around", margin:"10px auto"}}>
            {appointments[0]
            ? appointments.map((appointment) => 
                <PatientDetailsCard key={appointment.id} appointment={appointment} selectedDate={selectedDate}/>
            )
            :`No Appointments for the date: ${selectedDate}` 
            }  
        </Box>
    </>

  )
}

export default SelectAppointmentDate
