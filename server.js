const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config({ silent: true });

const app = express();


const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
})