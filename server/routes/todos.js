var express = require('express');
const Todo = require('../models/todo')

const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs/index');

var router = express.Router();


// Route to get all todos
router.get('/', (req, res, next) => {
Todo.find().populate('_owner')
.then(todos=>{
  res.json(todos)
})
.catch(error=>next(error))
});

router.post('/',passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let {text} = req.body
  let _owner = req.user._id
  Todo.create({text,_owner})
    .then(todo => {
      res.json({
        success: true,
        todo
      });
    })
    .catch(err => next(err))
});

// Route to DEL todo
router.delete('/:id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
  .then(todo=>{
    res.json({success: true, todo})
  })
  .catch(error=>next(error))
  });


module.exports = router;
