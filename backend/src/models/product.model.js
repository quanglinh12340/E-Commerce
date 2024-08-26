import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
}, {
    timestamps: true
})
const ProductModel = mongoose.model('products', productSchema)

export default ProductModel