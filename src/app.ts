import appRoute from './routes/app.route'
import express from 'express'

const app = express()

// Middleware to handle JSON
app.use(express.json())

// Routes
app.use('/', appRoute)

export default app
