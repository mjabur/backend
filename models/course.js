const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})


module.exports = mongoose.model('Course', courseSchema);