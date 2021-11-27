import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightDetailSchema = new Schema({
    // _id: Number,
    source: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    arrivalDateTime: String,
    deptartureDateTime: { type: String},
    miles: Number, // distance in miles btw src and dest
    basePrice: Number, // Minimum base price to book ticket in flight
    duration: String, // In minutes or hours
    startTime: String, 
    endTime: String,
    seats: [{
        seatNumber: String,
        isBooked: Boolean,
    }]
},
{ 
    versionKey: false 
});

const flightDetail = mongoose.model("FlightDetail", flightDetailSchema);

export default flightDetail;
