'use strict';

const express = require('express');

const People = require('../models/people-model.js');

const people = new People();
const router = express.Router();

router.get('/api/v1/people', getPeople);
router.get('/api/v1/people/:id', getPerson);
router.post('/api/v1/people', addPerson);

function getPeople(req,res,next) {
  people.get()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getPerson(req,res,next) {
  people.get(req.params.id)
    .then( data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function addPerson(req,res,next) {
  people.post(req.body)
    .then( data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
