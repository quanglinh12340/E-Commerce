import ProductModel from "../../models/product.model.js"

async function getCategoryWiseProductController(req, res) {
    try {

        const { category } = req.body || req.query

        const product = await ProductModel.find({ category })

        res.json({
            message: "Product",
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

export default getCategoryWiseProductController