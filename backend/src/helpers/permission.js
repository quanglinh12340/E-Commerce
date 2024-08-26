import UserModel from "../models/user.model.js"

const uploadProductPermission = async (userId) => {
    const user = await UserModel.findById(userId)

    if (user.role === "ADMIN") {
        return true
    }

    return false
}

export default uploadProductPermission