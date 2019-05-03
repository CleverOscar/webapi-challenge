const express = require('express');
const helpers = require('./helpers/projectModel');
const router = express.Router();
// console.log(Helpers);

router.get('/', async (req, res) => {
    try {
      const posts = await helpers.get(req.params.id);
      res.status(200).json(posts);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    }
  });

router.post('/', async (req, res) => {
    try {
      const post = await helpers.insert(req.body);
      res.status(200).json(post);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error posting the project',
      });
    }
  });


router.delete('/:id', async (req, res) => {
  try {
    const count = await helpers.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The post has been nuked' });
    } else {
      res.status(404).json({ message: 'The post could not be found' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error removing the post',
    });
  }
});



module.exports = router;
