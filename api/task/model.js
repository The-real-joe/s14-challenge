// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks(){
    return db('tasks')
    .leftJoin('projects as p', 'tasks.project_id', 'p.project_id')
}

async function postTask(task){
    const [task_id] = await db('tasks').insert(task)
    return getTasks().where({task_id}).first()
    
}

function convertTaskBoolean(task){
    return { ...task, task_completed: task.task_completed ? true : false }
}

module.exports = {
    getTasks,
    postTask,
    convertTaskBoolean
}