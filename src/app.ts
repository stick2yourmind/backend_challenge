import errorMiddleware from './middlewares/error.middleware'
import notFoundMiddleware from './middlewares/notFound.middleware'
import appRoute from './routes/app.route'
import express from 'express'

const app = express()

// Middleware to handle JSON
app.use(express.json())

// Routes
app.use('/', appRoute)

// Not found middleware
app.use(notFoundMiddleware)

// Error middleware
app.use(errorMiddleware)

export default app
