// build your `/api/resources` router here
const router = require('express').Router()
const helpers = require('./model.js')

router.get('/', (req, res, next) => {
    
    helpers.getResourses()
    .then(resources => {
        console.log(resources)
        const cleanedResources = resources.map( resource => helpers.convertResourceBoolean(resource))
        res.json(cleanedResources)
        
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    helpers.postResource(req.body)
        .then(resource => {
            res.json(helpers.convertResourceBoolean(resource))
        })
        .catch(next)
})


module.exports = router