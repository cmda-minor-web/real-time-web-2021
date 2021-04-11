const express = require('express')
const { join } = require('path')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8080

app.use(express.static(
  join(__dirname + '/public')
))

io.on('connection', socket => {
  console.log('A client has connected')

  socket.on('chat', message => {
    io.emit('chat', message)
  })

  socket.on('disconnect', () => {
    console.log('A client disconnected')
  })
})

server.listen(PORT, () => {
  console.info(
    `Server is running on localhost:${PORT}`
  )
})