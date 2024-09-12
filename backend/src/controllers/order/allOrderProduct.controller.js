import OrderModel from "../../models/orderProduct.model.js"
import UserModel from "../../models/user.model.js"

async function allOrderProductController(req, res) {
    try {

        const userId = req.userId

        const user = await UserModel.findById(userId)

        if (user.role !== "ADMIN") {
            return res.status(500).json({
                message: "You are not allowed access"
            })
        }

        const allOrder = await OrderModel.find().sort({ createAt: -1 })

        return res.status(200).json({
            message: "All order product",
            data: allOrder,
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

export default allOrderProductController