const express = require('express');
const router = express.Router();
const path = require('path');

const mongoose = require('mongoose')

const db = require("../models");

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))


})

router.get('/stats', (req,res) =>{

    
})

router.get('/exercise', (req,res) =>{
    res.sendFile(path.join(__dirname,'../', 'public', 'exercise.html'));
})

router.get('/exercise?', (req,res) =>{

    
})


module.exports = router