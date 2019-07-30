import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import SourceMapSupport from 'source-map-support'

import messageRoutes from './routes/message.route'

const app = express()

// Enable CORS so the frontend can access the API on a different port/host name without issues
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST,PUT,GET,PATCH')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Configure app to parse our responses as JSON (since we're an API)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Port for the local development server
const port = process.env.PORT || 3001

// Connect to local Mongo database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/code-showcase', {
  useNewUrlParser: true,
})

// Enable sourcemap's so we see the information from the source of the problem, rather than the compiled output
SourceMapSupport.install()

app.use('/messages', messageRoutes)

app.get('/', (req, res) => {
  return res.end('Work work!')
})

// Handle routes that we don't capture elsewhere
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>')
})

// Starting the local development server
app.listen(port, () => {
  console.log(`Local server running on http://localhost:${port}`)
})
