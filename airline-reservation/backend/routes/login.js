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
        const { identifier, password, userType} = req.body;
        let results = null;
        if (userType === 'user') {
            results =  await Users.findOne({mileageNumber: identifier});
        }
        if (userType === 'employee') {
            results =  await Users.findOne({empId: identifier});
        }
        if (results) {
            bcrypt.compare(password,results.password, function(error,match){
                if (error) {
                    return res.status(400).json({msg: "Invalid email"});
                }
                if(match){
                    const token = jwt.sign({
                        data: {
                            email: results.email,
                            userType: results.userType
                        }
                      }, token_key, { expiresIn: '1h' });
                      return res.status(200).json({
                        token: token,
                        msg: 'LoggedIn successfully',
                        data: results,
                    })
                }
                return res.status(400).json({msg: "Invalid password"})
            })
            
        }
        else{
            return res.status(400).json({msg:'Invalid credentials'});
        }
    
    } catch(error) {
        console.log("error==", error);
        return res.status(401).json({msg: 'Invalid user name or password'});
          
    }  
});  

export default router;