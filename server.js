const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express();
const path = require('path')
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 4001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var db = require('./models')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(cors());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('Node server is running on port ' + PORT);
    });
});