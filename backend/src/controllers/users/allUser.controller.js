import UserModel from "../../models/user.model.js";

async function allUserController(req, res) {
    try {
        console.log('userId all User', req.userId);
        const allUser = await UserModel.find()
        res.json({
            message: "All user",
            data: allUser,
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

export default allUserController