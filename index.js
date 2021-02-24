const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product')


mongoose
  .connect('mongodb://localhost/mongooseExpress', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
      console.log('CONNECTION SUCCESS!')
  })
  .catch(err => {
      console.LOG('Error connecting to mongo', err);
  })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})

// ROUTES
// --- PRODUCT INDEX --- 

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

// --- PRODUCT DETAILS ---

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/details', { product })
})