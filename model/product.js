const mongoose = require("mongoose");
const { Schema } = mongoose;

// Products Schema
const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, min: [0, "wrong price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong discount"],
    max: [500, "Too Much Discount"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong Rating"],
    max: [5, "Too Much Rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
