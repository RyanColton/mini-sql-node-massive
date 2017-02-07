var app = require('./index')
var db = app.get('db');
module.exports = {
  createProduct: function(req, res, next){
    db.create_product([req.body.name,req.body.description,req.body.price,req.body.imageurl],function(err, product){
      res.status(200).send('Product added')
    })
  },
  deleteNow: function(req, res, next){
    db.delete_product([req.params.productId], function(err, product){
      res.status(200).send('Product deleted')
    })
  },
  readProduct: function(req, res, next){
    db.read_product([req.params.productId], function(err, product){
      res.status(200).send(product)
    })
  },
  readProducts: function(req, res, next){
    db.read_products(function(err, products){
      res.status(200).send(products)
    })
  },
  updateProduct: function(req, res, next){
    if(req.query.imgurl = 'Y'){
    db.update_product([req.params.productId, req.body.imgurl], function(err, product){
      console.log(err)
      res.status(200).send('Product Updated')
    })
  }
  }
}
