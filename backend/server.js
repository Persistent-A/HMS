const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/appointments', require('./routes/appointmentRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port}`))