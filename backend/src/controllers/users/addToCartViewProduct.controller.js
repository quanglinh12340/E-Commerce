import addToCartModel from "../../models/cartProduct.model.js"

async function addToCartViewProductController(req, res) {
    try {

        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId: currentUser
        }).populate("productId")

        res.json({
            message: "Success",
            data: allProduct,
            success: true,
            error: false
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default addToCartViewProductController