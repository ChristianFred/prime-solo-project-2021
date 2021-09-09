const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * This Route gets all the Characters. 
 */
router.get('/', (req, res) => {
  let queryString = `SELECT Character FROM "Characters"`;
  pool.query(queryString)
    .then((result) => {
      console.log('our Character response', result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Characters response error', err);
      res.sendStatus(500);
    })
});

/**
 * This Route gets all the Items.
 */
router.get('/', (req, res) => {
  let queryString = `SELECT name FROM "Items"`;
  pool.query(queryString)
    .then((result) => {
      console.log('our Items response', result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Items response error', err);
      res.sendStatus(500);
    })
});
// Add A new matchup to the Database.
router.post('/', (req, res) => {
  const sqlText = `INSERT INTO "Matchup" ("outcome","myCharacter","enemyCharacter","user_id")
                  VALUES($1, $2, $3, $4);`;
const sqlParams = [
  req.body.outcome,
  req.body.myCharacter,
  req.body.enemyCharacter,
  req.user.id
]

pool.query(sqlText, sqlParams).then((response) => {
  console.log('POST successful', response);
  res.sendStatus(201);
}).catch((error) => {
  console.error('POST Error', error);
  res.sendStatus(500);
})
});

module.exports = router;
