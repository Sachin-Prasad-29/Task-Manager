const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  // here we will structure the document for Task collection
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 Characters']
  },
  completed: {
    type: Boolean,
    default: false

  }
})

module.exports = mongoose.model('Task', TaskSchema)
