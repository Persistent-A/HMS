import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {

    const[formData, setFormData] = useState({
        employee_id: '',
        password: '',
    })

    const { employee_id, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return <>
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
                <button>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Login

