const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParse = require("cookie-parser");
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_DB, () => {
    console.log('connect')
})

app.use(cors());
app.use(cookieParse());
app.use(express.json());

// routes
app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);

app.listen(8000, () => {
    console.log('sever is running');
})