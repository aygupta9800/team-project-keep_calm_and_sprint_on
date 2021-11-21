import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: Number,
    userType: { type: String, required: true, trim: true }, // ["user", "employee"]
    empId: String, //arline_emp1
    userName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    dob: {type: String },
    phone: { type: String, trim: true },
    token: {type: String, default: ''},
    address: {
        addressline1: String,
        city: String,
        state: String,
        country: String,
        zipcode: Number,
    },
    mileageNumber: String, //airline_customer1
    mileagePoints:  {type: Number, default: 0},
    gender: {type: String}
},
{ 
    versionKey: false 
});

const User = mongoose.model("User", userSchema);

export default User;
