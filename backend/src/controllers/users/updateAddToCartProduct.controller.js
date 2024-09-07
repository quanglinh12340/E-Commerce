import addToCartModel from "../../models/cartProduct.model.js"

async function updateAddToCartProductController(req, res) {
    try {

        const currentUserId = req.userId
        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({ _id: addToCartProductId }, {
            ...(qty && { quantity: qty })
        })

        res.json({
            message: "Product updated",
            data: updateProduct,
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
export default updateAddToCartProductController