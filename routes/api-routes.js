
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




module.exports = function (app) {
  app.get("/api/get/", function (req, res) {
    db.products.findAll({
      attributes: ['Category']
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  }),

    app.post("/api/post/", function (req, res) {
      console.log(req.body);
      db.products.create({
        PN: req.body.PN,
        Cost: req.body.Cost,
        Description: req.body.Description,
        Quantity: req.body.Quantity,
        MinQuantity: req.body.MinQuantity,
        Supplier: req.body.Supplier,
        Category: req.body.Category,
        Name: req.body.Name
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    }),

    app.get("/api/category/:category", function (req, res) {
      db.products.findAll({
        where: {
          PN: req.params.category
        }
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    }),

    app.delete("/api/delete/:id", function (req, res) {
      db.products.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    }),

    app.put("/api/put", function (req, res) {
      db.products.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

};