require('dotenv').config();
const express = require('express');
const cors = require('cors')    
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json()); 
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: true }));


require('./routes/fireConnect.routes')(app);
require('./config/mongoose.config');



app.listen(process.env.MY_PORT, () => {
    console.log(`Listening at port ${process.env.MY_PORT}`)
})

