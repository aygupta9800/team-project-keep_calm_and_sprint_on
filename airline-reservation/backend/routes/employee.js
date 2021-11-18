import mongoose from "mongoose";
import express from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import config from "../utils/config.js";
import Users from "../Models/users.js"; 


const { token_key } = config;

const router = express.Router();



router.get("/getUsers", async function (req, res) {
    try {
      const users = await Users.find();
       //console.log(users);
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


 router.post("/:id", async function(req, res){
    try{
      const user_id = req.params.id;
      const result = await Users.findById(user_id);
      var updateUser = {
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone: req.body.phone,
        userType: req.body.userType,
    };
    console.log(updateUser);
    if(result)
    {
      Users.updateOne(
        { _id: user_id },
        { $set: updateUser },
        function (err, result) {
          if (err) throw err;
            res.status(200).json({message :"User update success!"})
        }
      );
    }
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
