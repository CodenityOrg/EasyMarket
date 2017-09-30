var express = require('express');
var ToDo = require('../mongoose/todo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',(req,res)=>{
 res.render('test');
})

router.post('/quotes',(req,res)=>{
   // Insert into TodoList Collection
   var todoItem = new ToDo({
    itemId:req.body.id,
    item:req.body.item,
    category:req.body.category,
    completed: false
   })
  todoItem.save((err,result)=> {
    if (err) {console.log("---TodoItem save failed " + err)}
      console.log("+++TodoItem saved successfully "+todoItem.item)
      res.redirect('/test')
   })
})



module.exports = router;
