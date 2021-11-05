import mongoose from "mongoose";
import express from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import config from "../utils/config.js";
import Users from "../Models/users.js"; 

const { token_key } = config;

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password, results} = req.body;
        const resData =  await Users.find({email: email});
        if (resData.length>0) {
            bcrypt.compare(password,resData[0].password, function(error,result){
                if(!error){
                    const token = jwt.sign({
                        data: {
                            email: resData[0].email,
                            userType: resData[0].userType
                        }
                      }, token_key, { expiresIn: '1h' });
                      res.status(200).json({
                        token: token,
                        msg: 'LoggedIn successfully',
                        data: {
                         email: resData[0].email,
                         userType:resData[0].userType
                        }
                    })
                }
            })
            
        }
    
    } catch(error) {
        console.log("error==", error);
        return res.status(401).json({msg: 'Invalid user name or password'});
          
    }      
});

export default router;