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
router.get('/:kdramaId', (req,res)=>{
    db.Kdrama.findById({_id: req.params.kdramaId})
        .then(kdrama => res.render('./reviews/reviews',{kdrama:kdrama}))
})

// new route, renders new-form.ejs
// which creates(POST) a new review is submit is clicked
router.get('/:kdramaId/new', (req, res)=>{
    console.log('you\'re here')
    db.Kdrama.findById(req.params.kdramaId)
        .then(kdrama=>{
            res.render('./reviews/new-review',{kdrama:kdrama})
        })
    
})

// create route, receives a POST request sent from
// the new route, creates a new review and redirects to
// reviews of a specific drama
router.post('/:kdramaId', (req, res)=>{
    db.Kdrama.findByIdAndUpdate(
        req.params.kdramaId,
        {$push: {reviews: req.body}},
        {new:true}
    )
        .then(kdrama=>res.redirect('/reviews/'+kdrama._id))
})

// Show Route(specific review)
router.get('/:kdramaId/:reviewId', (req,res)=>{
    db.Kdrama.findOne(
        { 'reviews._id': req.params.reviewId },
        { 'reviews.$': true, _id: false }
    )
        .then(kdrama=>{
            res.render('./reviews/review-details',
            {
                kdramaId: req.params.kdramaId,
                review: kdrama.reviews[0]
            })
        })
})



// Edit Route(edit 1 review)
router.get('/:kdramaId/:reviewId/edit', (req, res)=>{
    db.Kdrama.findOne(
        { 'reviews._id': req.params.reviewId },
        { 'reviews.$': true, _id: false }
    )
        .then(kdrama=>{
            res.render('./reviews/edit-review',
            {
                kdramaId: req.params.kdramaId,
                review: kdrama.reviews[0]
            })
        })
})

// Update Route 
router.put('/:kdramaId/:reviewId/', (req, res)=>{
    req.body._id=req.params.reviewId
    db.Kdrama.findOneAndUpdate(
        {'reviews._id': req.params.reviewId},
        {$set: {'reviews.$':req.body}},
        {new:true}
        )
            .then(review=> {
                res.redirect(`/reviews/${req.params.kdramaId}/${req.params.reviewId}`)
            })

})

// Delete Route
router.delete('/review/:id',(req,res)=>{
    db.findById(req.params.id)
        .then((review)=> res.json(review))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
