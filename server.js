const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "projectdb"

//MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended:true}));

//CONNECT TO DB
require("./server/config/mongoose.config")(DB)

//START THE SERVER
app.listen(PORT, ()=> console.log(`>>Server is up on Port ${PORT}<<`))