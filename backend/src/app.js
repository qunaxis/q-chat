import http from 'http'
import express from 'express'
import SocketIO from 'socket.io'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
// import cors from 'cors'
// Import routes
// import routes from './routes'
// import chat from './routes/chat'

// Create http server with Express and Socket.io
const app = express()
const server = http.Server(app)
const io = new SocketIO(server, { path: '/chat' })

const { PORT = 8080 } = process.env
server.listen(PORT, '192.168.0.11', () => console.log(`Server started on port ${PORT}`)) // eslint-disable-line no-console

// app.set('socketio', io) // set app variable for use in routes files

app.disable('x-powered-by')

// View engine setup - DONT NEED NOW
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');

app.set("ipaddr", "192.168.0.11" )
app.set("port", 8080 )
app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

// Routes
// app.use('/', routes)
// app.use('/chat', chat)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

/* eslint-disable no-console */
io.on('connection', (socket) => {
  console.log(`[WS] User ${ socket.id } connected`);
  socket.on('message', message => {
    console.log(`[WS] User ${ socket.id } said: ${ message }`);
    socket.broadcast.emit('message', {
      user: socket.id,
      message: message
    })
  })
  socket.on('disconnect', function () {
    console.log(`[WS] User ${ socket.id } disconnected`);
  });
});
/* eslint-enable no-console */

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .json({
      error: true,
      message: err.message
    })
})

export default app
