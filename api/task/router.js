// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) =>{
    Tasks.getTasks()
    .then(task =>{
        res.status(200).json(task)
    })
    .catch(err =>{
        res.status(500).json({message: 'Error coming from tasks get'})
    })
})

router.post('/', (req, res) =>{
    Tasks.addTask(req.body)
    .then(task =>{
        res.status(201).json(task)
    }).catch(err =>{
        res.status(500).json({message: 'Error coming from tasks post'})
    })
})

module.exports = router;