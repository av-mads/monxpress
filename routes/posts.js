const express = require('express');
const bodyParser = require('body-parser');
const Post = require('../Models/Post.js');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// GET  
router.get('/', async (req, res) => {
  try{
    let posts = await Post.find();
    res.send(posts);
  }catch(err){
    console.log(err);
  }
});

router.get('/title/:title', async (req, res) => {
  try{
    var title = req.params.title;
    console.log(title);
    let post = await Post.find({title: title}).exec();
    res.send(post);
  }catch(err){
    console.log(err);
  }
});

router.get('/body/:body', async (req, res) => {
  try{
    var body = req.params.body;
    console.log("desc: " + body);
    let post = await Post.find({body: body}).exec();
    res.send(post);
  }catch(err){
    console.log(err);
  }
});

// POST
router.post('/add', async (req, res) =>{
  try{
    var savedPost = new Post({
      title: req.body.title,
      body: req.body.body
    });
    savedPost.save().then(res.send(savedPost));
  }catch(err){
    console.log(err);
  }
});

// PATCH
router.put('/add/:id', async (req, res) => {
  try{
    var comment = {
      body: req.body.body
    };

    let com = await Post.findByIdAndUpdate(
      {_id: req.params.id},
      {$push: {comments: comment}},
      {safe: true, upsert: true }
    );
    com.save();
    res.send(com);    
  }catch(err){
    console.log(err);
  }
});

// DELETE
router.delete('/remove/:id', async(req,res) => {
  
});


module.exports = router;