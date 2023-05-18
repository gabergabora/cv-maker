const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const user = require("./routes/user");
                   
const port = process.env.PORT || 5000;

dotenv.config();

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

app.use(bodyParser.json());
app.use(cors);
app.use("/user", user);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port))
  .catch((err) => console.error("koneksi gagal", err));
