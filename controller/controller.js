const users = require("../model/model");

exports.getusers=(req,res)=>{

res.render('users', { users });

}