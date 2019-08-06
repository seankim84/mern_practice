const express = require('express');
const router  = express.Router();

// Item Model 
const Item = require('../../models/items');

// @route GET api/items
router.get('/', (req,res) => { // At the server, already have the path
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @route GET api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then(item => res.json(item));
})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ sucess: false }))
    ) 
})


module.exports = router;