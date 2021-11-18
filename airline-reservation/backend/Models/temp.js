import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tempSchema = new Schema({
    // _id: Number,
    count: {type: Number, default: 0 },
},
{ 
    versionKey: false 
});

const temp = mongoose.model("Temp", tempSchema);

export default temp;
