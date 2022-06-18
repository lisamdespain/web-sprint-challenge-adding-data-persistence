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

function addProject(project){
   return db('projects').insert(project)
    .then(([project_id]) => db('projects').where({project_id}).select('project_name', 'project_description', 'project_completed'))
    .then(results =>
        results.map(project => ({
            ...project,
            project_completed: project.project_completed ? true : false
        }))
    )
}

module.exports = {
    getAllProjects,
    addProject
}