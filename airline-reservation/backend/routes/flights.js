import mongoose from "mongoose";
import express from "express";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken";

import config from "../utils/config.js";
// import Users from "../Models/users.js";
import FlightDetail from "../Models/flightDetails.js";
import flightsData from "../utils/flightData.js";

const router = express.Router();

router.get('', async (req, res) => {
    try {
        const flights = await FlightDetail.find({});
        res.status(200).json({ data: flights });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
}); 

router.post('/add', async (req, res) => {
    try {
        let flight;
        for (let i= 0; i< flightsData.length; i++) {
            flight = new FlightDetail({
                source: flightsData[i].source,
                destination: flightsData[i].destination,
                arrivalDateTime: flightsData[i].arrivalDateTime,
                deptartureDateTime: flightsData[i].deptartureDateTime,
                miles: flightsData[i].miles, // distance in miles btw src and dest
                basePrice: flightsData[i].basePrice, // Minimum base price to book ticket in flight
                duration: flightsData[i].duration, // In minutes or hours
                startTime: flightsData[i].startTime, 
                endTime: flightsData[i].endTime,
            });
            const savedFlight = await flight.save();
        }
        const flights = await FlightDetail.find({});
        res.status(200).json({ data: flights });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
}); 

export default router;