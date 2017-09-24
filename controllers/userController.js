const User = require('../models/user');


module.exports.index =  function(req,res){
	res.render('index',{title:"JULIO"})
}

module.exports.create = function(res,res){

    User.create({

        email:req.body.email,
        facebookId:req.body.facebookId,
        name:req.body.username,
        lastname:req.body.lastname,
        city:req.body.city,
        cellphone:req.body.cellphone,
        createdAt:req.body.createdAt

    },function (err, user) {

        if(err) handleError(err);

    });


	
}