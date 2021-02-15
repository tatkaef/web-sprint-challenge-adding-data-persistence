// build your `Project` model here

const db = require('../../data/dbConfig')

module.exports ={
    findProjects,     
    addProject,
}

function findProjects() {
    return db('project')
    
}

function addProject(project) {
    return db('project').insert(project)
}
