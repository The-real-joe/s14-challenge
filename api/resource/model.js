// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResourses() {
    return db('resources')
}

async function postResources(resource){
    const [resource_id] = await db('resources').insert(resource)
    return getResourses().where('resource_id', resource_id)
}   

module.exports = {
    getResourses,
    postResources
}