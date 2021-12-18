const mongoose = require("mongoose");
mongoose.promise = global.promise;

mongoose
  .connect(
    "mongodb+srv://topadmin:topadmin@cluster0.c6xzz.mongodb.net/wishs?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to database successfully.");
  })
  .catch((e) => {
    console.log("error in connecting to database");
    console.log(e);
  });

module.exports = { mongoose };
