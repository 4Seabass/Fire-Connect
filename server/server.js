require('dotenv').config();
const express = require('express');
const cors = require('cors')    
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());


require('./config/mongoose.config');
require('./routes/fireConnectAccounts.routes')(app);
require('./routes/fireConnectComments.routes')(app);
require('./routes/fireConnectDiscussions.routes')(app);


app.listen(process.env.MY_PORT, () => {
    console.log(`Listening at port ${process.env.MY_PORT}`)
})

