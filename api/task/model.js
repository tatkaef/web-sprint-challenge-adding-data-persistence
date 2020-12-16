// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    findTasks,
    findTasksById,
    addTask
   
}

function findTasks() {
    return db('project')
    .join('task', 'task.project_id', 'project.id')
    .select('project.id', 'project.project_name', 'project.description','task.description as taskDescription')
    
}

function findTasksById(id) {
    return db('project')
    .join('task', 'task.project_id', 'project.id')
    .select('project.id', 'project.project_name', 'project.description','task.description as taskDescription')
    .where('project.id', '=', id)
}

function addTask(task) {
    return db('task').insert(task, 'id')
}
