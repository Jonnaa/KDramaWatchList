// Require the Mongoose package
const mongoose = require('mongoose');

const kdramaSchema = new mongoose.Schema({
    title: {type: String, required: true},
    poster: {type: String, required:true},
    synopsis: {type: String, required: true},
    rating: {type: Number, required: true, min:0, max:10},
    genre:{type: String, required: true},
    seasons: {type: Number, required: true},
    episodes: {type: Number, required: true}
})

// Export schema as a mongoose model
// Model will be accessed in `models/index.js`
module.exports = mongoose.model('Kdrama', kdramaSchema)