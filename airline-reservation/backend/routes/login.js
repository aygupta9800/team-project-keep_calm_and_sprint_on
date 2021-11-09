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
        //const { email, password, results} = req.body;
        const email = req.body.email;
        const password = req.body.password;
        const results =  await Users.find({email: email});
       // console.log(results[0]);
        if (results.length>0) {
            bcrypt.compare(password,results[0].password, function(error,result){
                if(!error){
                    const token = jwt.sign({
                        data: {
                            email: results[0].email,
                            userType: results[0].userType
                        }
                      }, token_key, { expiresIn: '1h' });
                      res.status(200).json({
                        token: token,
                        msg: 'LoggedIn successfully',
                        data: {
                         email: results[0].email,
                         userType:results[0].userType
                        }
                    })
                }
            })
            
        }
        else{
            res.status(401).json({msg:'Invalid user name and password'});
        }
    
    } catch(error) {
        console.log("error==", error);
        return res.status(401).json({msg: 'Invalid user name or password'});
          
    }  
});  

export default router;