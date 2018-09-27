const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express();
const path = require('path')

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


const connection = mysql.createConnection({
    host: 'stockandtrack.cnpaonpk4jsm.us-west-1.rds.amazonaws.com',
    user: 'stockAndTrack',
    password: 'stockAndTrack2018',
    database: 'stockAndTrack'

})

connection.connect(err => {
    if (err) {
        return err;
    }
})

console.log(connection)

app.use(cors());


app.get('/', (req, res) => {
    res.send('go to /products to see products')
});

app.get('/products/add', (req, res) => {
    const {PN, Cost, Description, Quantity } = req.query;
    const INSERT_PRODUCT_QUERY = `INSERT INTO products (PN, Cost, Description, Quantity) VALUES( '${PN}' , ${Cost} , '${Description}', ${Quantity})`
    connection.query(INSERT_PRODUCT_QUERY, (err, results) =>{
       
        if(err) {
            throw err
        }

    })

    console.log(PN, Cost, Description, Quantity)
    

})


app.get('/products', (req, res) => { 
    const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
        })
})

// app.listen(4000, () => {
//     console.log('listening on port 4000')
// })

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen( PORT, function() {
    console.log( 'Node server is running on port ' + PORT);
    });