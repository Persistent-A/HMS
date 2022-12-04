import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset, doctorsAppointments } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

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
      <section>
          <h1>
              <FaSignInAlt /> Login
          </h1>
      </section>
      <section>
          <form onSubmit={onSubmit}> 
              <div>
                  <input type = 'employee_id' id='employee_id' name='employee_id' value={employee_id} placeholder='Enter you employee_id' onChange={onChange}/>
              </div>
              <div>
                  <input type = 'password' id='password' name='password' value={password} placeholder='Enter you password' onChange={onChange}/>
              </div>
              <div>
                  <input type='submit' value='Login' />
              </div>
          </form>
      </section>
    </>
  )
}

export default Login

