const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in get route');
    const sqlText = `SELECT * FROM subjects`;
    pool.query(sqlText)
    .then(result => {res.send(result.rows)})
    .catch(error => {console.log('error retrieving posters', error)})
  })

  router.post('/', (req,res) => {
    const sqlText = `INSERT INTO subjects ("subject") 
                      VALUES ($1)`
    pool.query(sqlText, [req.body.subject])
    .then(result => {res.sendStatus(201)})
    .catch(error => {console.log('error posting new book', error)
          res.sendStatus(500)
    })
  });

  router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    const sqlText = `DELETE FROM subjects WHERE id=($1)`
    pool.query(sqlText, [req.params.id])
    .then(result => {res.sendStatus(201)})
    .catch(error => {console.log('error posting new book', error)
          res.sendStatus(500)
    })
  });

module.exports=router;