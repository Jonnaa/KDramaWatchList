/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const reviewsCtrl = require('./controllers/reviews')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



/* Middleware (app.use)
--------------------------------------------------------------- */

// Detect if running in a dev environment
if (process.env.ON_HEROKU === 'false') {
    // Configure the app to refresh the browser when nodemon restarts
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        // wait for nodemon to fully restart before refreshing the page
        setTimeout(() => {
        liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));


/* Mount routes
--------------------------------------------------------------- */
// Home route
app.get('/', function (req, res) {
    db.Kdrama.find({}).sort({title:1})
        .then(kdramas=>{
            res.render('home',{kdramas:kdramas})
        })
});

// watchlist route
app.get('/watchlist',function(req,res){
    db.Kdrama.find({addedToList:true})
        .then(kdramas=> {
            res.render('watchlist',{kdramas:kdramas})
        })
})

// add to watchlist route
app.get('/watchlist/:kdramaId',function(req,res){
    db.Kdrama.findByIdAndUpdate(
        req.params.kdramaId,
        {addedToList: true}
    )
    .then(kdrama=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})

// //WatchList Route
// app.get('/watchlist/:kdramaId',function(req,res){
//     db.Kdrama.findByIdAndUpdate(
//         req.params.kdramaId,
//         {addedToList: {
//             $cond: [{$eq: true}, false, true]
//         }}
//     )
//     .then(kdrama=>{
//         console.log(kdrama.addedToList)
//     })
//     .catch(err=>console.log(err))
// })


// Seed route
// When a GET request is sent to `/seed`, the kdramas collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing kdramas
    db.Kdrama.deleteMany({})
        .then(removedKdramas => {
            console.log(`Removed ${removedKdramas.deletedCount} kdramas`)
            // Seed the kdramas collection with the seed data
            db.Kdrama.insertMany(db.seedKdramas)
                .then(addedKdramas => {
                    console.log(`Added ${addedKdramas.length} kdramas`)
                    res.json(addedKdramas)
                })
        })
});


// This tells our app to look at the `controllers/reviews.js` file 
// to handle all routes that begin with `localhost:3000/reviews`
app.use('/reviews', reviewsCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
