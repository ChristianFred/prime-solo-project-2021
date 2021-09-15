const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * This Route gets all Matches that have the same id values for Played Characters.
 */
router.get('/', (req, res) => {
  console.log(req.query)
  let queryString = `SELECT outcome, "Matchup".id,
 "Mine"."Character" AS "myCharacter",
 "Mine".image_path AS player_image_path,
 "Enemy"."Character" AS "enemyCharacter",
 "Enemy".image_path AS enemy_image_path,
 "Item1".name AS "Item1",
 "Item1".image_path AS Item1_image_path,
 "Item2".name AS "Item2",
 "Item2".image_path AS Item2_image_path,
 "Item3".name AS "Item3",
 "Item3".image_path AS Item3_image_path,
 "Item4".name AS "Item4",
 "Item4".image_path AS Item4_image_path,
 "Item5".name AS "Item5",
 "Item5".image_path AS Item5_image_path,
 "Item6".name AS "Item6",
 "Item6".image_path AS Item6_image_path
  FROM "Matchup"
 JOIN "Characters" AS "Mine" ON "Mine".id = "Matchup"."myCharacter"
 JOIN "Characters" AS "Enemy" ON "Enemy".id = "Matchup"."enemyCharacter"
 JOIN "Items" AS "Item1" ON "Item1".id = "Matchup"."Item1"
 JOIN "Items" AS "Item2" ON "Item2".id = "Matchup"."Item2"
 JOIN "Items" AS "Item3" ON "Item3".id = "Matchup"."Item3"
 JOIN "Items" AS "Item4" ON "Item4".id = "Matchup"."Item4"
 JOIN "Items" AS "Item5" ON "Item5".id = "Matchup"."Item5"
 JOIN "Items" AS "Item6" ON "Item6".id = "Matchup"."Item6"
 JOIN "user" ON "user".id = "Matchup".user_id
 WHERE "myCharacter" = $1;`
  pool.query(queryString, [req.query.characterId])
     .then((result) => {
       console.log('our Character response', result.rows);
       res.send(result.rows);
     })
     .catch((err) => {
       console.log('Characters response error', err);
       res.sendStatus(500);
     })
   
});

// Same as above but for the Enemy Matchup
router.get('/enemy', (req, res) => {
  console.log(req.query)
  let queryString = `SELECT outcome, "Matchup".id,
 "Mine"."Character" AS "myCharacter",
 "Mine".image_path AS player_image_path,
 "Enemy"."Character" AS "enemyCharacter",
 "Enemy".image_path AS enemy_image_path,
 "Item1".name AS "Item1",
 "Item1".image_path AS Item1_image_path,
 "Item2".name AS "Item2",
 "Item2".image_path AS Item2_image_path,
 "Item3".name AS "Item3",
 "Item3".image_path AS Item3_image_path,
 "Item4".name AS "Item4",
 "Item4".image_path AS Item4_image_path,
 "Item5".name AS "Item5",
 "Item5".image_path AS Item5_image_path,
 "Item6".name AS "Item6",
 "Item6".image_path AS Item6_image_path
  FROM "Matchup"
 JOIN "Characters" AS "Mine" ON "Mine".id = "Matchup"."myCharacter"
 JOIN "Characters" AS "Enemy" ON "Enemy".id = "Matchup"."enemyCharacter"
 JOIN "Items" AS "Item1" ON "Item1".id = "Matchup"."Item1"
 JOIN "Items" AS "Item2" ON "Item2".id = "Matchup"."Item2"
 JOIN "Items" AS "Item3" ON "Item3".id = "Matchup"."Item3"
 JOIN "Items" AS "Item4" ON "Item4".id = "Matchup"."Item4"
 JOIN "Items" AS "Item5" ON "Item5".id = "Matchup"."Item5"
 JOIN "Items" AS "Item6" ON "Item6".id = "Matchup"."Item6"
 JOIN "user" ON "user".id = "Matchup".user_id
 WHERE "enemyCharacter" = $1;`
  pool.query(queryString, [req.query.characterId])
    .then((result) => {
      console.log('our Character response', result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Characters response error', err);
      res.sendStatus(500);
    })

});

// Add A new matchup to the Database.
router.post('/', (req, res) => {
  const sqlText = `INSERT INTO "Matchup" ("outcome","myCharacter","enemyCharacter","user_id","Item1","Item2","Item3","Item4","Item5","Item6")
                  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
const sqlParams = [
  req.body.outcome,
  req.body.myCharacter,
  req.body.enemyCharacter,
  req.user.id,
  req.body.Item1,
  req.body.Item2,
  req.body.Item3,
  req.body.Item4,
  req.body.Item5,
  req.body.Item6
]

pool.query(sqlText, sqlParams).then((response) => {
  console.log('POST successful', response);
  res.sendStatus(201);
}).catch((error) => {
  console.error('POST Error', error);
  res.sendStatus(500);
})
});

router.delete('/:id', (req,res) => {
  console.log('req.params are:',req.params)
  const sqlText = `DELETE FROM "Matchup" WHERE id=$1;`;
  pool.query(sqlText, [req.params.id])
  .then(() => { res.sendStatus(200); })
  .catch((error) => {
  console.error('DELETE Error', error);
  res.sendStatus(500);
  })
})

router.put('/:id', (req,res) => {
  const id = req.params.id
  console.log('req.params are:', req.params);
  const sqlText = `UPDATE "Matchup"
  SET "outcome" = $1,
  "myCharacter" = $2,
  "enemyCharacter" = $3,
  "Item1" = $4,
  "Item2" = $5,
  "Item3" = $6,
  "Item4" = $7,
  "Item5" = $8,
  "Item6" = $9
  WHERE id = $10;`;
  const queryValues = [
    req.body.outcome,
    req.body.myCharacter,
    req.body.enemyCharacter,
    req.body.Item1,
    req.body.Item2,
    req.body.Item3,
    req.body.Item4,
    req.body.Item5,
    req.body.Item6,
    id
  ];
  pool.query(sqlText, queryValues).then(() => {
    res.sendStatus(200); }).catch((err) => {
      console.log('Error completing the Updated Match', err);
      res.sendStatus(500);
    });
  });

module.exports = router;
