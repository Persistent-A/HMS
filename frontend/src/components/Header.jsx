import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
// import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutDoctor, reset } from '../features/auth/authSlice'

//MATERIAL UI
import Button from '@mui/material/Button'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function Header() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {doctor} = useSelector((state) => state.auth)

    const logoutDoc = () => {
        dispatch(logoutDoctor())
        dispatch(reset())
        navigate('/')
    }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HMS
          </Typography>
          {doctor 
            ?(
            <Button variant="contained" color="primary" onClick={logoutDoc}>
                <FaSignOutAlt/> Logout
            </Button>
            )
            :(
            <Box sx={{
                width: 270,
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <Link to='/login' style={linkStyle}>
                    <FaSignInAlt/>For Doctor
                </Link> 
                <Link to='/book_appointment' style={linkStyle}>
                    <FaUser /> For Patient
                </Link>
            </Box>)
            }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header