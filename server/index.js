require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const user = require("./models/userSchema");
const cors = require("cors");

const router = require("./routes/router");

require("./Db/conn");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log("Server listening on port");
});
