const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostsSchema = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String}
});

module.exports = mongoose.model('Posts', PostsSchema);