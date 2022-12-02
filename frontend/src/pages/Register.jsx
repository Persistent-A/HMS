import {useState, useEffect, useRef} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

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
            <FaUser /> Book an Appointment
        </h1>
        <p>Please fill the details to book an Appointment</p>
    </section>
    <section>
        <form onSubmit={onSubmit}> 
            <div>
                <input type = 'name' id='name' name='name' value={name} placeholder='Enter you name' onChange={onChange}/>
            </div>
            <div>
                <input type = 'age' id='age' name='age' value={age} placeholder='Enter you age' onChange={onChange}/>
            </div>
            <div>
                <input type = 'phone' id='phone' name='phone' value={phone} placeholder='Enter you phone' onChange={onChange}/>
            </div>
            <div>
                <input type = 'email' id='email' name='email' value={email} placeholder='Enter you email' onChange={onChange}/>
            </div>
            <div>
                <input type = 'address' id='address' name='address' value={address} placeholder='Enter you address' onChange={onChange}/>
            </div>
            <div>
                <label>Select Date: </label>
                <input type = 'date' id='date' name='date' value={date} placeholder='Select date' onChange={onChange}/>
            </div>
            <div>
                {/* <input type = 'department' id='department' name='department' value={department} placeholder='Select department' onChange={onChange}/> */}
                <label>Select Department: </label>
                <select  ref={dropdown} onChange={onChange}>
                    <option value='' defaultChecked>-----</option>
                    <option value='er'>ER</option>
                    <option value='neuro'>Neuro</option>
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Register
