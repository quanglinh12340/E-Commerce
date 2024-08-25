import UserModel from "../models/user.model.js"


async function updateUserController(req, res) {
    try {

        const sessionUser = req.userId

        const { userId, name, email, role } = req.body

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }

        const user = await UserModel.findById(sessionUser)
        console.log("🚀 ~ updateUserController ~ user:", user.role)

        const updateUser = await UserModel.findByIdAndUpdate(userId, payload)

        res.json({
            message: "User updated",
            data: updateUser,
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

export default updateUserController