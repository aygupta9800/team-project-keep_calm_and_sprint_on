import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: Number,
    userType: { type: String, required: true, trim: true }, // ["user", "employee"]
    // empId: String
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    dob: {type: String },
    phone: { type: String, trim: true },
    token: {type: String, default: ''},
    address: {
        streetAddress: String,
        aptNumber: String,
        city: String,
        state: String,
        country: String,
        zipcode: Number,
    },
    mileageNumber: {type: Number, default: 0},
    gender: {type: String}
},
{ 
    versionKey: false 
});

const User = mongoose.model("User", userSchema);

export default User;
