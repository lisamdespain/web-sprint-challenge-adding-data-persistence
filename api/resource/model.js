// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources() {
    return db('resources')
}

async function addResource(resource){
    const [resource_id] = await db('resources').insert(resource)
    return getAllResources().where({resource_id}).first()
}

module.exports = {
    getAllResources,
    addResource
}