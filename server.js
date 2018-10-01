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

// const connection = mysql.createConnection({
//     host: 'stockandtrack.cnpaonpk4jsm.us-west-1.rds.amazonaws.com',
//     user: 'stockAndTrack',
//     password: 'stockAndTrack2018',
//     database: 'stockAndTrack'

// })

// connection.connect(err => {
//     if (err) {
//         return err;
//     }
// })

// console.log(connection)

app.use(cors());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('Node server is running on port ' + PORT);
    });
});