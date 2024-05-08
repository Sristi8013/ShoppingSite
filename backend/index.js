const express = require("express");

const mongoose = require("mongoose");
const productRouter = require("./routes/product.routes");
const cors= require ("cors");

const app = express();

app.use( cors ({
  origin:"*"
}))
const mongodbURL ="mongodb+srv://sristi2022b:bhatta@cluster0.w2pa5tm.mongodb.net/e_commerce?retryWrites=true&w=majority"
mongoose.connect(mongodbURL);

const db= mongoose.connection;

db.once("open", () => {
  console.log("Connected to Database sucessfully!");
});

db.on ("error", () => {
  console.log("error Connecting to Database!");
  process.exit();
});


app.get('/', function (req, res) {
    res.send('Hello Sristi');
  });
  
  app.use(express.json());
  app.use(productRouter);
  
  app.listen(4000, "0.0.0.0",() => {
    console.log("Server started at port 4000");
  });
  //mongodb+srv://sristi2022b:<password>@cluster0.w2pa5tm.mongodb.net/?retryWrites=true&w=majority//
