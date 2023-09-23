/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/reviews`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')



/* Routes
--------------------------------------------------------------- */

// Index route(all reviews)
router.get('/:id', (req,res)=>{
    db.Kdrama.findById({_id: req.params.id})
        .then(kdrama => res.render('reviews',{kdrama:kdrama}))
})

// Show Route(specific review)
router.get('/review/:id', (req,res)=>{
    res.send('hello')
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
