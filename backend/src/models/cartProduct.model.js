import mongoose from "mongoose";

const addToCartSchema = new mongoose.Schema({
    productId: {
        ref: "products",
        type: String
    },
    quantity: Number,
    userId: String,
}, {
    timestamps: true
})

const addToCartModel = mongoose.model("addToCart", addToCartSchema)

export default addToCartModel
