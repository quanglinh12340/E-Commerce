import ProductModel from "../../models/product.model.js"

async function getProductController(req, res) {
    try {

        const product = await ProductModel.find().sort({ createAt: -1 })

        res.status(200).json({
            message: "All product",
            data: product,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

export default getProductController