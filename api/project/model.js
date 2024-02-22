// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

async function postProject(project) {
    const [project_id] = await db('projects').insert(project, 'id')
    return getProjects().where({project_id}).first()
}

function convertProjectBoolean(project){
    return{...project, project_completed: project.project_completed ? true : false}
}

module.exports = {
    getProjects,
    postProject,
    convertProjectBoolean
}