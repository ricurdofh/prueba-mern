const express = require('express');
const router = express.Router();

const Posts =  require('./Model');

router.get('/', async (req, res) => {
    const posts = await Posts.find();
    res.json(posts);
});

module.exports = router;