const User = require("../models/user");

module.exports.index =  (req,res) => {
    res.render("index");
}

module.exports.SignIn = (req,res) => {
    const { email, password } = req.body;
    User.findOne({ 
        email,
        password
    }, (err,user) => {
        if (err) { 
            throw err;
        }
        res.send(user);
    });
}

module.exports.create = (req,res) => {
    const { email, facebookId, password, name, lastname, city, cellphone, createdAt } = req.body;
    User.create({
        email,
        facebookId,
        password,
        name,
        lastname,
        city,
        cellphone,
        createdAt
    }, (err, user) => {
        if(err) throw err;
        res.send(user);        
    });
}