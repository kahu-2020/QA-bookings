const path = require('path')
const express = require('express')

const coachRoute = require('./routes/coachRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/', coachRoute )

module.exports = server
