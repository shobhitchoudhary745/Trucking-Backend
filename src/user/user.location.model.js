const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lon: {
      type: String,
    },
    lat: {
      type: String,
    },
  },
  { timestamps: true }
);

const locationModel = mongoose.model("UserLocation", locationSchema);

module.exports = locationModel;
