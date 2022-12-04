import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset, doctorsAppointments } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

function Login() {

    const[formData, setFormData] = useState({
        employee_id: '',
        password: '',
    })

    const { employee_id, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { doctor, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
      if (isError) {
        toast.error(message)
      }

      if (isSuccess && doctor ) {
        // dispatch(doctorsAppointments())
        navigate('/select_appointment_date/')
      }
    }, [doctor, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

      const doctorData = {
        employee_id,
        password,
      }
      
      dispatch(login(doctorData))
    }
      
    if (isLoading) {
      return <Spinner />
    }

  return (
    <>
      <Box sx={{ border: "1px solid grey", width: "50%", height: 220, margin: '100px auto', padding: "30px", display: "flex", flexDirection:"column", alignItems:"center"}}> 
        <section>
            <h1>
                <FaSignInAlt /> Login
            </h1>
        </section>
        <section>
            <Box onSubmit={onSubmit} component='form'> 
                <div>
                    <TextField variant="standard" sx={{width: 400}} type = 'employee_id' id='employee_id' name='employee_id' value={employee_id} placeholder='Enter you employee_id' onChange={onChange}/>
                </div>
                <div>
                    <TextField variant="standard" sx={{width: 400}} type = 'password' id='password' name='password' value={password} placeholder='Enter you password' onChange={onChange}/>
                </div>
                <div>
                    <Button variant="outlined" color="secondary"sx={{width: 400, margin:"20px 0px"}} type='submit'>Login</Button>
                </div>
            </Box>
        </section>
      </Box>
    </>
  )
}

export default Login

