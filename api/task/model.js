// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    findTasks,
    addTask
   
}

function findTasks(id) {
    return db('project')
    .join('task', 'task.id', 'project.task_id')
    .select('project.id', 'project.project_name', 'project.description','task.description')
    .where('project.task_id', '=', id)
}

function addTask(task) {
    return db('task').insert(task, 'id')
}
