// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks(){
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes',
        't.task_completed', 'p.project_name', 'p.project_description')
    .then(results =>
        results.map(task => ({
            ...task, 
            task_completed: task.task_completed ? true : false
        }))
    )
        
}


function addTask(task){
    return db('tasks').insert(task)
     .then(([task_id]) => db('tasks').where({task_id}))
     .then(results =>
         results.map(task => ({
             ...task,
             task_completed: task.task_completed ? true : false
         }))
     )
 }

module.exports = {
    getTasks,
    addTask
}