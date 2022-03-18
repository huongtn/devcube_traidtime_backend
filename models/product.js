//const mongoose = require('mongoose');
module.exports = (mongoose) => {
  var productSchema = new mongoose.Schema(
    {
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: [true, 'Company is required'],
      },
      title: {
        type: String,
        required: [true, 'Title is required'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
      },
      stock: {
        type: Number,
        required: [true, 'Stock is required'],
      }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );
  return productSchema;
}
