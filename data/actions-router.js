const express = require('express');
const helpers = require('./helpers/actionModel');
const router = express.Router();

router.get('/:id', async (req, res) => {
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

router.put('/:id', async (req, res)=>{
  try{
    const update = await helpers.update(req.params.id, req.body);

    if(update){
      res.status(200).json(update);
    }else {
      res.status(404).json({message: 'No project found'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Error updating content"})
  }
})



module.exports = router;
