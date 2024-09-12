import OrderModel from "../../models/orderProduct.model.js"

async function orderController(req, res) {
    try {

        const currUserId = req.userId

        const orderList = await OrderModel.find({ userId: currUserId }).sort({ createAt: -1 })

        res.json({
            message: "Order list",
            data: orderList,
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

export default orderController