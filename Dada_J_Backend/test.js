const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testdb")
  .then(() => console.log("Connected ✅"))
  .catch((err) => console.error("Connection failed ❌", err));