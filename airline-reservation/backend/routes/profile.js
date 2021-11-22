import mongoose from "mongoose";
import express from "express";

import config from "../utils/config.js";
import Users from "../Models/users.js";

const router = express.Router();

router.get('/user/:userId', async (req, res) => {
    try {
        // userId = req.params.
        const user = await Users.findById(req.params.userId);
        return res.status(200).json({ data: user });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
});

router.put('/user/:userId', async (req, res) => {
    try {
        const updatedBody = req.body;
        const user = await Users.findByIdAndUpdate(req.params.userId, updatedBody, {new:true});
        return res.status(200).json({ data: user });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
});

export default router;