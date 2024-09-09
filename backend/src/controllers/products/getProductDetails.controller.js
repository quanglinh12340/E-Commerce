import ProductModel from "../../models/product.model.js"

async function getProductDetailsController(req, res) {
    try {

        const { productId } = req.body

        const product = await ProductModel.findById(productId)

        res.json({
            message: "Ok",
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

export default getProductDetailsController