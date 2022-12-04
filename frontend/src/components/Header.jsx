import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
// import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutDoctor, reset } from '../features/auth/authSlice'


function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {doctor} = useSelector((state) => state.auth)

    const logoutDoc = () => {
        dispatch(logoutDoctor())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header>
        <div className='logo'>
            HMS
        </div>
        <ul>
            {doctor 
            ?(<li>
                <button onClick={logoutDoc}>
                    <FaSignOutAlt/> Logout
                </button>
            </li>)
            :(
            <>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt/>For Doctor
                    </Link>
                </li>
                <li>
                    <Link to='/book_appointment'>
                        <FaUser /> For Patient
                    </Link>
                </li>
            </>)
            }
            
            
        </ul>
    </header>
  )
}

export default Header
