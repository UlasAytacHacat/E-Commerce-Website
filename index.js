const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductModel = require("./models/Products");
const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecommerce");

app.get("/getProducts", (req,res)=>{
    ProductModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


