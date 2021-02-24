const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost/mongooseExpress", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION SUCCESS!");
  })
  .catch((err) => {
    console.LOG("Error connecting to mongo", err);
  });

const seedProducts = [
  {
    name: "Ruby Grapefruit",
    price: 1.99,
    category: "fruit",
  },
  {
    name: "Banana",
    price: 0.99,
    category: "fruit",
  },
  {
    name: "Tomato",
    price: 2.19,
    category: "vegetable",
  },
  {
    name: "Celery",
    price: 2.89,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 5.99,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
