const router = require('express').Router();
const Cosplay= require('../db').import('../models/cosplay');
const validateSession = require('../middleware/validate-session');

//GET ALL
router.get('/', (req, res) =>{
    Cosplay.findAll()
        .then(cosplay => res.status(200).json(cosplay))
        .catch(err => res.status(500).json({error: err}))
})
 
//POST
router.post('/', (req, res) => {
    const cosplayFromRequest = {
        image: req.body.image,
        caption: req.body.caption,
        owner: req.body.owner
    }

    // console.log(req);

    Cosplay.create(cosplayFromRequest)
        .then(cosplay => res.status(200).json(cosplay))
        .catch(err => res.json(req.errors));
})
// UPDATE BY ID
router.put('/:id', (req, res) => {
    Cosplay.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(cosplay => res.status(200).json(cosplay))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE BY ID
router.delete('/:id', (req, res) => {
    Cosplay.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(cosplay => res.status(200).json(cosplay))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;