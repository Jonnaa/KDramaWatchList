const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    rating: {type: Number, min:0, max:10,required: true}
})


// Export schema, but not as a mongoose model
module.exports = reviewSchema