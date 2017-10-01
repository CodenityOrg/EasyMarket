const User = require('../models/user');

module.exports.index =  (req,res) => {
	res.render('index',{title:"JULIO"})
}

module.exports.SigIn = (req,res) => {
    User.findOne({ 
        email:req.body.email,
        password:req.body.password 
    },(err,user) => {
        if (err) throw err;
        res.send(user);
      });
}

module.exports.create = (req,res) => {
    User.create({
        email:req.body.email,
        facebookId:req.body.facebookId,
        password:req.body.password,
        name:req.body.name,
        lastname:req.body.lastname,
        city:req.body.city,
        cellphone:req.body.cellphone,
        createdAt:req.body.createdAt
    }, (err, user) => {
        if(err) throw err;
        res.send(user);        
    });


	
}