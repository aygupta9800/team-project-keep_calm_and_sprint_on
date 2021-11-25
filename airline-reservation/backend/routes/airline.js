import mongoose from "mongoose";
import express from "express";

import config from "../utils/config.js";
import Airline from "../Models/airline.js";

const router = express.Router();

router.get('', async (req, res) => {
    try {
        const airline = await Airline.findOne();
        return res.status(200).json({ data: airline });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
});

router.put('', async (req, res) => {
    try {
        const {airlineId, userId, userType, airlineDetails} = req.body;
        if (userId && userType === 'employee') {
            const airline = await Airline.findByIdAndUpdate(airlineId, airlineDetails, {new:true});
            return res.status(200).json({ data: airline });
        }
        return res.status(401).json({msg: "Only employee can update airline detail"})
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
});

export default router;