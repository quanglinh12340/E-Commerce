import addToCartModel from "../../models/cartProduct.model.js"

async function addToCartController(req, res) {
    try {
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await addToCartModel.findOne({ productId })
        if (isProductAvailable) {
            return res.json({
                message: "Already exits in Add to Cart",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new addToCartModel(payload)

        const saveProduct = await newAddToCart.save()

        return res.json({
            message: "The product has been added to the cart ",
            data: saveProduct,
            success: true,
            error: false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

export default addToCartController