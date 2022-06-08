const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    author: {
        type: String,
        max: 100,
        required: true,
    },
    blogId: {
        type: String,
        required: true,
        unique: true,
    },
    quotes: {
        type: String,
        required: true,
    },
    created_on: {
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('blogdata', blogSchema);
