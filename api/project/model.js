// build your `Project` model here
const db = require('../../data/dbConfig');

function getAllProjects(){
    return db('projects')
    .then(results =>
        results.map(project => ({
            ...project,
            project_completed: project.project_completed ? true : false
        }))
    )
}

async function addProject(project){
    const [project_id] = await db('projects').insert(project)
    return getAllProjects().where({project_id}).first();
}

module.exports = {
    getAllProjects,
    addProject
}