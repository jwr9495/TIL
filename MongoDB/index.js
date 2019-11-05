const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connection complete ...."))
  .catch(error => console.error(error));
