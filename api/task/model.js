// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'tasks.project_id', 'projects.project_name')
}

async function postTask( task) {
    const [task_id] = await db('tasks').insert(task, 'task_id')
    return getTasks().where({task_id}).first()
}

function convertTaskBoolean(task) {
    return { ...task, task_completed: task.task_completed ? true : false }
}

module.exports = {
    getTasks,
    postTask,
    convertTaskBoolean
}