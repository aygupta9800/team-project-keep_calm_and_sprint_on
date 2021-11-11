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
  
 

export default router;