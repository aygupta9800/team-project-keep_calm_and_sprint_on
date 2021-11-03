import mongoose from "mongoose";
import express from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import config from "../utils/config.js";
import Users from "../Models/users.js"; 

const { token_key } = config;

const router = express.Router();

router.post('/user', async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body;
        const existingUser =  await Users.findOne({email: email});
        if (existingUser) {
            return res.status(400).send({msg: "User with given email already exist"})
        }
        const result = await bcrypt.hash(password, 10, async function(err, hash) {
            const token = jwt.sign({ email}, token_key, {expiresIn: "2h"});
            const userBody = new Users({
                firstName,
                lastName,
                email,
                password: hash,
                phone,
                token,
                userType: "user",
            });
            const user = await userBody.save();
            // console.log("======c====", user);
            return res.status(200).json({msg: "Customer Signup Successful", data: user});   
        });
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: error});
    }      
});

router.post('/employee', async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body;
        const existingUser =  await Users.findOne({email: email});
        if (existingUser) {
            return res.status(400).send({msg: "User with given email already exist"})
        }
        const result = await bcrypt.hash(password, 10, async function(err, hash) {
            const token = jwt.sign({ email}, token_key, {expiresIn: "2h"});
            const employeeBody = new Users({
                firstName,
                lastName,
                email,
                password: hash,
                phone,
                token,
                userType: "employee",
            });
            const employee = await employeeBody.save();
            // console.log("======c====", c);
            return res.status(200).json({msg: "Employee Signup Successful", data: employee});   
        });
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: error});
    }      
});

export default router;