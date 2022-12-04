import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeAppointmentDate } from '../features/auth/authSlice'

const ReSchedule = ({appointment, selectedDate}) => {
    const [reDate, setReDate] = useState()
    
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const reSchedule = (e) => {
      e.preventDefault()
      const updatedAppointment = {
        ...appointment,
        date: reDate
      }
      dispatch(changeAppointmentDate(updatedAppointment))
    }


  return (
    <form onSubmit={reSchedule}>
      <label>Select date to reschedule the appoinment: </label>
      <input type="date" value={reDate} onChange={(e)=>setReDate(e.target.value)}/>
      <input type='submit' value='Reschedule'/>
    </form>
  )
}

export default ReSchedule
