const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Cars = require("./controllers/carController");
require("dotenv").config();
const app = express();

require("./config/conn.js");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/cars", Cars);
app.use(require("./controllers/userController.js"));


const PORT = process.env.PORT ;
app.get("/", (req, res) => {
  res.send("welcome")
})
app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}` );
});
