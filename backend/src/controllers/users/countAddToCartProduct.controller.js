import addToCartModel from "../../models/cartProduct.model.js"

async function countAddToCartProductController(req, res) {
    try {
        const userId = req.userId

        const count = await addToCartModel.countDocuments({
            userId: userId
        })

        res.json({
            message: "Success",
            data: {
                count: count
            },
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

export default countAddToCartProductController