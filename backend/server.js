const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5001

const connectDB = require('./config/db')
const color = require('colors')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/appointments', require('./routes/appointmentRoutes'))
app.use('/api/doctor', require('./routes/doctorRoutes'))

// Frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please Activate Production'))
}

app.use(errorHandler)
app.listen(port, () => console.log(`Server is running on port: ${port}`))