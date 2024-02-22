// build your `/api/tasks` router here
const router = require('express').Router()
const helpers = require('./model.js')

router.get('/', (req, res, next) => {
    
    helpers.getTasks()
    .then(tasks => {
        console.log(tasks)
        const cleanedTasks = tasks.map(task => helpers.convertTaskBoolean(task))
        res.json(cleanedTasks)
        
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    helpers.postTask(req.body)
        .then(task => {
            res.json(helpers.convertTaskBoolean(task))
        })
        .catch(next)
})


module.exports = router