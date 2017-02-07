var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:Ryan936169@localhost/sandbox';
var massiveInstance = massive.connectSync({connectionString: connectionString});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
var db = app.get('db');
var controller = require('./controller.js');

app.get('/api/products', controller.readProducts);
app.get('/api/product/:productId', controller.readProduct);
app.post('/api/product', controller.createProduct);
app.delete('/api/product/:productId', controller.deleteNow);
app.put('/api/product/:productId', controller.updateProduct)

app.listen('1138', function(){
  console.log("Successfully listening on : 1138")
})
