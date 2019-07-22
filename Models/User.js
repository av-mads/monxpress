let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
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