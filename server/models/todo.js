const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text:{type: String},
  _owner:{type: mongoose.Schema.Types.ObjectId, ref:'User'}  
  // name: {
  //   type: String,
  //   required: [true, 'The country name is required']
  // },
  // capitals: {
  //   type: [String],
  //   default: []
  // },
  // area: {
  //   type: Number,
  // },
  // description: {
  //   type: String,
  // },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;