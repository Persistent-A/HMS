import {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {bookAppointment, reset} from '../features/auth/authSlice'
import {FaUser} from 'react-icons/fa'
// import Spinner from '../components/Spinner'
//Material-UI
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function BookAppointment() {

    const dropdown = useRef()

    const[formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        address: '',
        date: '',
        department: '',
    })

    const { name, age, phone, email, address, date, department } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {appointments, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth 
    )

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess) {
            navigate('/')
            dispatch(reset())
        }
    }, [appointments, isError, isSuccess, message, navigate, dispatch])
    
    

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const appointmentData = {
            name, age, phone, email, address, date, department 
        }
        dispatch(bookAppointment(appointmentData))   
    }

    if(isLoading){
        return <h1>Loading....</h1>
    }

  return <>
    <Box onSubmit={onSubmit} component='form' sx={{border: "1px solid grey", width: "50%", margin: '50px auto', display: "flex", flexDirection:"column", alignItems:"center"}}> 
        <h1>
            <FaUser /> Book an Appointment
        </h1>
        <p>Please fill the details to book an Appointment</p>
        <form>
            <div>
                <TextField variant="standard" type = 'name' sx={{width: 400}} id='name' name='name' value={name} placeholder='Enter you name' onChange={onChange} required/>
            </div>
            <div>
                <TextField variant="standard" type = 'age' sx={{width: 400}} id='age' name='age' value={age} placeholder='Enter you age' onChange={onChange} required/>
            </div>
            <div>
                <TextField variant="standard" type = 'phone' sx={{width: 400}} id='phone' name='phone' value={phone} placeholder='Enter you phone' onChange={onChange} required/>
            </div>
            <div>
                <TextField variant="standard" type = 'email' sx={{width: 400}} id='email' name='email' value={email} placeholder='Enter you email' onChange={onChange} required/>
            </div>
            <div>
                <TextField variant="standard" type = 'address' sx={{width: 400}} id='address' name='address' value={address} placeholder='Enter you address' onChange={onChange} required/>
            </div>
            <div style={{margin : "10px", display:"flex", justifyContent: 'space-around', alignItems:"center", width: 400}}>
                <label>Select Date: </label>
                <TextField variant="standard" type = 'date' id='date' name='date' value={date} placeholder='Select date' onChange={onChange}/>
            </div>
            <div style={{ display:"flex", justifyContent: 'space-around', width: 400, margin: "0px 20px 30px 0px"}}>
                {/* <input type = 'department' id='department' name='department' value={department} placeholder='Select department' onChange={onChange}/> */}
                <label>Select Department: </label>
                <select type='department' name='department' ref={dropdown} onChange={onChange}>
                    <option value='' defaultChecked>-----</option>
                    <option value='er'>ER</option>
                    <option value='neuro'>Neuro</option>
                </select>
            </div>
            <div>
            <Button sx={{float: "right", marginBottom: "20px"}} variant="outlined" color="secondary" type='submit'>Book Appointment</Button>
            </div>
        </form>
    </Box>
  </>
}

export default BookAppointment
