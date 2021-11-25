import mongoose from "mongoose";
import express from "express";

import config from "../utils/config.js";
import Users from "../Models/users.js";
import Booking from "../Models/booking.js";
import FlightDetail from "../Models/flightDetails.js";
import flightsData from "../utils/flightData.js";

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const {userId, flightId, totalSeatNeeded, mileagePointsToUse, totalPricePaid, flightClass, identityNumber } = req.body;
        let user = await Users.findById(userId);
        if (!user) {
            return res.status(400).json({msg: "Not valid user"});
        }
        if (user.mileagePoints < mileagePointsToUse) {
            return res.status(400).json({msg: "Not enough mileage points"});
        }
        const flight = await FlightDetail.findById(flightId);
        if (flight.totalAvailableSeats < totalSeatNeeded) {
            return res.status(400).json({msg: "Not enough seats on flight"});
        }
        const seats = [];
        for (let i= 0; i< totalSeatNeeded; i++) {
            seats.push(flight.totalAvailableSeats - i);
        }
        let booking = new Booking({
            userId: userId,
            flightId: flightId,
            seatNumbers: seats,
            bookingDateTime: new Date(),
            totalPricePaid,
            totalPassengers: totalSeatNeeded,
            identityNumber,
            flightClass,
        });
        booking = await booking.save();
        user.mileagePoints = user.mileagePoints - mileagePointsToUse + flight.miles
        user = await user.save();
        return res.status(200).json({ booking, user });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
}); 


//get customer bookings
router.get('/user/:userId', async (req, res) => {
    try {
        const {userId } = req.params;
        const booking = await Booking.find({userId})
        return res.status(200).json({ data: booking });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
}); 

export default router;