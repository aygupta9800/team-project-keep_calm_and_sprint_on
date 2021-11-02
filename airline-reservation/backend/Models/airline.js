import mongoose from "mongoose";

const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    // _id: Number,
    airlineName: { type: String, required: true, trim: true },
    helplineNumber: {type: Number},
    supportEmail: { type: String, required: true, trim: true },
    desc: String,
},
{ 
    versionKey: false 
});

const Airline = mongoose.model("Airline", airlineSchema);

export default Airline;
