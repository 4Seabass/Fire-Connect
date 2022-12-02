const express = require('express');
const cors = require('cors')    
const app = express();

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({ extended: true }));


require('./routes/fireConnect.routes')(app);
require('./config/mongoose.config');


app.listen(8000, () => {
    console.log("Listening at port 8000")
})