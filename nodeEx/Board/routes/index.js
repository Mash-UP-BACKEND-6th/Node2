var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/board', async function(req, res, next) {
  const read = await db.Board.findAll({});
  res.json(read);
});

router.get('/board/:id', async (req, res, next) => {
  const { id } = req.params;
  const read = await db.Board.findOne({
      where:{
        id,
      }
    });
  res.json(read);
});

router.post('/board', async (req, res, next) => {
  const { name, text } = req.body;
  const read = await db.Board.create({
        name,
        text,
  });
  res.json(read);
});

router.put('/board/:id', async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const read = await db.Board.update({
    text:text,
  }, {
    where: {
      id,
    },
  });
  res.json(read);
});

router.delete('/board/:id', async (req, res, next) => {
  const { id } = req.params;
  const read = await db.Board.destroy({
    where: {
      id,
    },
  });
  res.json(read);
});

module.exports = router;
