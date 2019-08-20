const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/realworld', {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
