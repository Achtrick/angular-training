const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({
  text: {
    type: "string",
    required: true,
    trim: true,
  },
});

const wish = mongoose.model("wish", wishSchema);
module.exports = { wish };
