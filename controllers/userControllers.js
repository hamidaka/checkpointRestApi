const userModel = require("../models/userModel");
const User = require("../models/userModel")
// @desc create a new user
// @params POST /api/v1/users
// @access PUBLIC

exports.createUser = (req, res) => {
    //   User.create(req.body)
    //     .then((data) => res.json(data))
    //     .catch((err) => {
    //       if (err.code === 11000) {
    //         return res.status(400).json('email already used');
    //       }
    //       console.log(err);
    //       res.status(500).json(err);
    //     });
    const newUser = new User(req.body);
    newUser
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  };
// @desc get all users
// @params GET /api/v1/users
// @access PUBLIC

exports.getUser = (req,res)=>{
    User.find()
    .then((data)=>res.json(data))
    .catch((err)=>  res.status(500).json(err));
}
// @desc get user by id
// @params GET /api/v1/users
// @access PUBLIC

exports.getUserById = (req,res)=>{
    User.findById(req.params.id)
    .then((data)=>res.json(data))
    .catch((err)=>  res.status(500).json(err));
}
// @desc delete user by id
// @params delete /api/v1/users
// @access PUBLIC
exports.deleteUserById=(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
}
// @desc update user by id
// @params update /api/v1/users
// @access PUBLIC
exports.updateUserById=(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
}