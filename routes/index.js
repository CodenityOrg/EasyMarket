
const express = require("express");

const ToDo = require("../graphql/models/todo");

const Market = require("../graphql/models/market");
const Atribute = require("../graphql/models/atribute");
const Photo = require("../graphql/models/photo");
const User = require("../graphql/models/user");
const Product = require("../graphql/models/product");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/test",(req,res)=>{
 res.render("test");
})

router.post("/quotes",(req,res)=>{
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
      res.redirect("/test")
   })
});

router.post("/market",(req,res)=>{
   var data = req.body;
   var newMarket = new Market({
    name:data.nameMarket,
    address:data.addressMarket
   })
  newMarket.save((err,result)=> {
    if (err) {console.log("---Market save failed " + err)}
      console.log("+++Market saved successfully "+newMarket.name)
      res.redirect("/test")
   })
});

router.post("/atribute",(req,res)=>{
   var data = req.body;
   var newAtribute = new Atribute({
    name:data.nameAtribute,
    value:data.valueAtribute
   })
  newAtribute.save((err,result)=> {
    if (err) {console.log("---Atribute save failed " + err)}
      console.log("+++Atribute saved successfully "+newAtribute.name)
      res.redirect("/test")
   })
});

router.post("/photo",(req,res)=>{
   var data = req.body;
   var newPhoto = new Photo({
    name:data.namePhoto,
    metadata:data.metadataPhoto,
    thumbnail:data.thumbnailPhoto,
    url:data.urlPhoto
   })
  newPhoto.save((err,result)=> {
    if (err) {console.log("---Photo save failed " + err)}
      console.log("+++Photo saved successfully "+newPhoto.name)
      res.redirect("/test")
   })
});

router.post("/user",(req,res)=>{
   var data = req.body;
   var newUser = new User({
    email:data.emailUser,
    name:data.nameUser,
    lastname:data.lastnameUser,
    city:data.cityUser,
    cellphone:data.cellphoneUser
   })
  newUser.save((err,result)=> {
    if (err) {console.log("---User save failed " + err)}
      console.log("+++User saved successfully "+newUser.name)
      res.redirect("/test")
   })
});

router.post("/product",(req,res)=>{
   var data = req.body;
   console.log(data);
   var newProduct = new Product({
    name:data.nameProduct,
    price:[data.priceProduct],
    marketId:data.marketIdProduct,
    atributes:[data.atributesProduct],
    photo:data.photoProduct
   })
  newProduct.save((err,result)=> {
    if (err) {console.log("---Product save failed " + err)}
      console.log("+++Product saved successfully "+newProduct.name)
      res.redirect("/test")
   })
});

router.get("/product",(req,res)=>{
  Product.find({})
  .exec(function (err,user) {
    if(err) return res.sendStatus(503);
    return res.json(user);
  });
});


router.route('/')
  .get(userController.index);

router.route("/login")
  .post(userController.SigIn);

module.exports = router;
