const mongoose = require('mongoose');

const URI = 'mongodb://colombia69:kjdsf67S2@ds133632.mlab.com:33632/preuba_p69';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;