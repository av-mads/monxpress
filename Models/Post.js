let mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    date: {
        type: Date,
        default: Date.now()
    },
    comments: [{
        body: {
            required: true,
            type: String
        },
            date: {
                type: Date,
                default: Date.now()
            }
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports =  Post;