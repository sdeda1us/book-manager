const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    const sqlText = `SELECT b.title, b.publication_year, b.pages, b.subject_id, s.id, s.subject
                    FROM books AS b
                    JOIN subjects AS s ON b.subject_id = s.id;`;
    pool.query(sqlText)
    .then(result => {res.send(result.rows)})
    .catch(error => {console.log('error retrieving posters', error)})
  })

router.post('/', (req,res) => {
  const sqlText = `INSERT INTO books ("title", "publication_year", "pages", "subject_id") 
                    VALUES ($1, $2, $3, $4)`
  pool.query(sqlText, [req.body.title, req.body.publication_year, req.body.pages, req.body.subject_id])
  .then(result => {res.sendStatus(201)})
  .catch(error => {console.log('error posting new book', error)
        res.sendStatus(500)
  })
});

router.put('/:id', (req,res) => {
  const sqlText = `UPDATE books SET subject_id=NULL where subject_id=($1)`;
  pool.query(sqlText, [req.params.id])
  .then(result => {res.sendStatus(201)})
  .catch(error => {console.log('error posting new book', error)
        res.sendStatus(500)
  })
});

module.exports = router;