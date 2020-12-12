// build your `Resource` model here

const db = require('../../data/dbConfig')

module.exports = {
    findResources,
    addResource,
}

function findResources() {
    return db('resource')
}

function addResource(resource) {
    return db('resource').insert(resource).then(value => {
        return findResources(value)
    })
}

