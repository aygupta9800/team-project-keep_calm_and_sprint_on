import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    // _id: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FlightDetail"
    },
    seatId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Seat"
    },
    bookingDateTime: String,
    totalPricePaid: Number,
    totalPassengers: Number,
    identityNumber: String,
    flightClass: String,
},
{ 
    versionKey: false 
});

const booking = mongoose.model("Booking", bookingSchema);

export default booking;
;
