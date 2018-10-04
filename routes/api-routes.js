

var db = require("../models");




module.exports = function(app) {
  app.get("/api/get/", function(req, res) {
    db.products.findAll({
      attributes: ['Category']
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  }),

  app.post("/api/post/", function(req, res) {
    console.log(req.body);
    db.products.create({
      PN: req.body.PN,
      Cost: req.body.Cost,
      Description: req.body.Description,
      Quantity: req.body.Quantity,
      MinQuantity: req.body.MinQuantity,
      Supplier: req.body.Supplier,
      Category: req.body.Category,
      Name: req.body.Name,
      Lat: req.body.Lat,
      Lon: req.body.Lon

    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  }),

  app.get("/api/category/:category", function(req, res) {
    console.log(req.params.category)
    db.products.findAll({
      where: {
        Category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  }),

  app.get("/api/singleQuery/:id", function(req, res) {
    console.log(req.params.id)
    db.products.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  }),

  app.delete("/api/delete/:id", function(req, res) {
    db.products.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  }),

  app.put("/api/put", function(req, res) {
    db.products.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

};