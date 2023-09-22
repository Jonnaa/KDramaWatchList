// Require the Mongoose package
const mongoose = require('mongoose');

const kdramaSchema = new mongoose.Schema({
    title: {type: String, required: true},
    picture: {type: String, required:true},
    description: {type: String, required: true},
    rating: {type: Number, required: true, min:0, max:100},
    genre:{type: String, required: true},
    episodes: {type: Number, required: true}
})

// Export schema as a mongoose model
// Model will be accessed in `models/index.js`
module.exports = mongoose.model('Kdrama', kdramaSchema)