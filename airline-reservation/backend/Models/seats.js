import mongoose from "mongoose";

const Schema = mongoose.Schema;

const seatSchema = new Schema({
    // _id: Number,
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FlightDetail"
    },
    seatType: String, // ["window", "aisle", "middle"]
    class: String, // ["business", "economy"]
    seatNumber: String,
},
{ 
    versionKey: false 
});

const seat = mongoose.model("Seat", seatSchema);

export default seat;
