
// app.get('/products/add', (req, res) => {
//     const {PN, Cost, Description, Quantity, MinQuantity, Supplier, Category } = req.query;
//     const INSERT_PRODUCT_QUERY = `INSERT INTO products (PN, Cost, Description, Quantity, MinQuantity, Supplier, Category) 
//     VALUES( '${PN}' , ${Cost} , '${Description}', ${Quantity}, ${MinQuantity} , '${Supplier}' , '${Category}')`
//     connection.query(INSERT_PRODUCT_QUERY, (err, results) =>{
       
//         if(err) {
//             throw err
//         }

//     })

//     console.log(PN, Cost, Description, Quantity, MinQuantity, Supplier, Category)
    
// })


// app.get('/products', (req, res) => { 
//     console.log("you have hit /products")
//     const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'
//     connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
//         if(err) {
//             return res.send(err)
//         }
//         else {
//             return res.json({
//                 data: results
//             })
//         }
//         })
// })

var db = require("../models");


module.exports = function(app) {
    app.get("/api/posts/", function(req, res) {
        db.products.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
};