import ProductModel from "../../models/product.model.js"

async function filterProductController(req, res) {
    try {
        const categoryList = req?.body?.category || []

        const product = await ProductModel.find({
            category: {
                "$in": categoryList
            }
        })

        res.json({
            message: "Product",
            data: product,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}
export default filterProductController