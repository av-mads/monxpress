var express = require('express')
const router = express.Router();

// Register routes
var posts = require('./posts.js');

// Use Routes
router.use('/posts', posts);

module.exports = router;
