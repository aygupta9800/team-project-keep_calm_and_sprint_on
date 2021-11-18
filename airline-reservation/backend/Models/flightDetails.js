import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightDetailSchema = new Schema({
    // _id: Number,
    source: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    arrivalDateTime: String,
    deptartureDateTime: { type: String},
    duration: Number, // In minutes or hours
    miles: Number, // distance in miles btw src and dest
    basePrice: Number, // Minimum base price to book ticket in flight
},
{ 
    versionKey: false 
});

const flightDetail = mongoose.model("FlightDetail", flightDetailSchema);

export default flightDetail;
