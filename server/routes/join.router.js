const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in get route');
    const sqlText = `SELECT s.id, s.subject, COUNT(*) FROM subjects AS s
                    JOIN books AS b on b.subject_id=s.id
                    GROUP BY s.id`;
    pool.query(sqlText)
    .then(result => {console.log(result.rows);
                        res.send(result.rows)})
    .catch(error => {console.log('error retrieving posters', error)})
  })

module.exports=router;