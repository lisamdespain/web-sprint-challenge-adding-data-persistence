// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', (req, res) =>{
    Projects.getAllProjects()
    .then(project =>{
        res.status(200).json(project);
    }).catch(err =>{
        res.status(500).json({message: 'Error from projects get'})
    })
})

router.post('/', (req,res) =>{
    Projects.addProject(req.body)
    .then(project =>{
        res.status(201).json(project)
    }).catch(err =>{
        res.status(500).json({message: 'Error from projects post'})
    })
})

module.exports = router;