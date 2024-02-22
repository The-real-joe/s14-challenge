// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const teskRouter = require('./task/router')

const server = express()
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', teskRouter)

server.use('*', (req, res) => {
    res.status(404).json({ error: 'not found' })
})

module.exports = server