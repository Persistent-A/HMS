import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PatientDetailsCard from "../components/PatientDetailsCard"
import {doctorsAppointments} from '../features/auth/authSlice'

function SelectAppointmentDate() {
    
    const [selectedDate, setSelectedDate] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {doctor, appointments} = useSelector((state) => state.auth)


    const showPatientDetails = (e) => {
        e.preventDefault()
        dispatch(doctorsAppointments({date: selectedDate}))
    }

  return (
    <>
        <form className='doctorportal-form' onSubmit={showPatientDetails}>
                <h1>Welcome to your scheduled appointment</h1>
                <div className='doctorportal-form-row'>
                    <label>Select date of appointment:</label>
                    <input type='date' 
                    value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)}
                    />
                </div>
                <input type='submit' value='Click to Check' />
        </form>
        {appointments
        ? appointments.map((appointment) => 
            <PatientDetailsCard key={appointment.id} appointment={appointment} selectedDate={selectedDate}/>
        )
        :`No Appointments for the date: ${selectedDate}` 
        }
    </>

  )
}

export default SelectAppointmentDate
