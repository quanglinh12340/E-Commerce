import UserModel from "../models/user.model.js"

async function userDetailsController(req, res) {
    try {

        console.log("🚀 ~ userDetailsController ~ user:", req.userId)

        const user = await UserModel.findById(req.userId)

        res.status(200).json({
            message: "User details",
            data: user,
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

export default userDetailsController