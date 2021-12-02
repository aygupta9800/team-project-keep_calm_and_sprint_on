import mongoose from "mongoose";
import express from "express";

import config from "../utils/config.js";
import Users from "../Models/users.js";
import Booking from "../Models/booking.js";
import FlightDetail from "../Models/flightDetails.js";
import flightsData from "../utils/flightData.js";
import User from "../Models/users.js";

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const {userId, flightId, mileagePointsToUse, totalPricePaid, flightClass, identityNumber, seats } = req.body;
        let user = await Users.findById(userId);
        if (!user) {
            return res.status(400).json({msg: "Not valid user"});
        }
        if (user.mileagePoints < mileagePointsToUse) {
            return res.status(400).json({msg: "Not enough mileage points"});
        }
        let flight = await FlightDetail.findById(flightId);
        const seatsBooked = [];
        let flightsSeats = flight.seats || [];
        for (let i=0; i< flightsSeats.length; i++ ) {
            for (let j=0; j< seats.length; j++) {
                if (flightsSeats[i].seatNumber == seats[j].seatNumber) {
                    if (!flightsSeats[i].isBooked) {
                        flightsSeats[i].isBooked = true;
                        seatsBooked.push(flightsSeats[i].seatNumber);
                    }else{
                        return res.status(400).json({msg: "Same seat cant be booked twice"})
                    }
                }
            }
        }
        flight = await flight.save();
        let booking = new Booking({
            userId: userId,
            flightId: flightId,
            seatNumbers: seatsBooked,
            bookingDateTime: new Date(),
            totalPricePaid,
            identityNumber,
            flightClass,
        });
        booking = await booking.save();
        user.mileagePoints = user.mileagePoints - mileagePointsToUse + (flight.miles / 100)
        user = await user.save();
        return res.status(200).json({ booking, user, flight });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
}); 


//get customer bookings
router.get('/user/:userId', async (req, res) => {
    try {
        const {userId } = req.params;
        const booking = await Booking.find({userId});
        return res.status(200).json({ data: booking });
    
    } catch(error) {
        console.log("error==", error);
        return res.status(500).json({msg: 'error'});
          
    }  
});

router.put('/:bookingId', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { flightClass } = req.body;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(400).json({msg: 'Booking with given Id doesnt exist'});
        }
        booking.flightClass = flightClass;
        const savedbooking = await booking.save();
        return res.status(200).json({data: savedbooking});
    } catch(error) {

    }
});

router.delete('/:bookingId', async (req, res) => {
    console.log('delete');
    try {
        const { bookingId } = req.params;
        const booking = await Booking.findByIdAndDelete(bookingId);
        const { userId, flightId } = booking;
        const user = await User.findById(userId);
        const flight = await FlightDetail.findById(flightId);
        // user.mileagePoints = user.mileagePoints;
        let flightsSeats = flight.seats;
        let bookingSeats = booking.seatNumbers
        for (let i=0; i< flightsSeats.length; i++ ) {
            for (let j=0; j< bookingSeats.length; j++) {
                if (flightsSeats[i].seatNumber === bookingSeats[j]) {
                    flightsSeats[i].isBooked = false;
                }
            }
        }
        await flight.save();
        await user.save();
        return res.status(200).json({ booking, mileagePoints:  user.mileagePoints});
    } catch (error) {

    }
})

export default router;