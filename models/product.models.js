const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: [true, "please enter product name"]
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        },





    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;