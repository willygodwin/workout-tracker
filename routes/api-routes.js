const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose')

const db = require("../models");





router.get('/api/workouts', (req, res) =>{
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

})


router.put('/api/workouts/:id', (req, res) =>{
    console.log(req.body)
    console.log(req.params.id);
    
    let ExerciseData = {}
    if (req.type === 'cardio') {
        ExerciseData = {
            type: req.body.type,
            name: req.body.name, 
            distance: req.body.distance, 
            duration: req.body.duration
        }
    } else {
        ExerciseData = {
            type : req.body.type,
            name : req.body.name, 
            weight : req.body.weight, 
            sets : req.body.sets,
            reps : req.body.reps,
            duration : req.body.duration
        }
    }

    db.Exercise.create(ExerciseData)
    .then((dbExercise) => {
        console.log(dbExercise);
        return db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { Exercises: dbExercise._id } }, { new: true })
    }).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
    
})


router.post('/api/workouts', (req, res) =>{
    db.Workout.create({})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout)
  })
  .catch(({message}) => {
    console.log(message);
  });
    
})


router.get('/api/workouts/range', (req, res) =>{

    
})



module.exports = router
