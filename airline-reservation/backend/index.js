import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import connectMongoDB from './utils/dbConnection.js';

import signup from "./routes/signup.js";
import login from "./routes/login.js";
import employee from "./routes/employee.js";
import flight from "./routes/flights.js" ;
import profile from "./routes/profile.js";
import airline from "./routes/airline.js";
import booking from "./routes/booking.js";
// import login from "./routes/login.js";
// import restaurants from "./routes/restaurants.js";
// import customers from "./routes/customers.js";
// import logout from './routes/logout.js';
// import imageUpload from './routes/imageUpload.js';

const app = express();
// const {mongoDB} = config

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// app.use(cors({ origin: 'http://3.145.84.75:3008', credentials: true }));
app.use(cors({ origin: 'http://localhost:3008', credentials: true }));


app.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3008');
  res.setHeader('Access-Control-Allow-Origin', 'http://3.145.84.75:3008');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// app.use(cors({ origin: 'http://localhost:3008', credentials: true }));

app.use("/signup", signup);
app.use("/login",login);
app.use("/employee", employee);
app.use("/flight", flight);
app.use("/profile", profile);
app.use("/airline", airline);
app.use("/booking", booking);

// app.use("/login", login);
// app.use("/customers", customers);
// app.use("/logout", logout);
// app.use("/imageUpload", imageUpload);

const port = 3009;


// Use of another path to see results for js_refresher.js
app.get('/', (req, res) => {
    res.send("Hello World")
});

connectMongoDB();

const db = mongoose.connection; 
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'));

// To listen to port 3009
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

export default app;