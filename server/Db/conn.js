const mongoose = require("mongoose");

const DB =
  "mongodb+srv://zubair:crud1234@cluster0.wcoy3.mongodb.net/merncrud?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection created successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
