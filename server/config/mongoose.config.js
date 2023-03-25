const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/petdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to PetShop DB");
  })
  .catch((err) => {
    console.log(err);
  });
