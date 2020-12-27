const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log('in get route');
    const sqlText = `SELECT b.title, b.publication_year, b.pages, b.subject_id, s.id, s.subject
                    FROM books AS b
                    JOIN subjects AS s ON b.subject_id = s.id;`;
    pool.query(sqlText)
    .then(result => {console.log(result.rows);
                        res.send(result.rows)})
    .catch(error => {console.log('error retrieving posters', error)})
  })


module.exports = router;