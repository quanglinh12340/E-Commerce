import UserModel from "../../models/user.model.js"
import bcrypt from "bcryptjs"

async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body

        if (!name) throw new Error('Please provide name!')
        if (!email) throw new Error('Please provide email!')
        if (!password) throw new Error('Please provide password!')

        const user = await UserModel.findOne({ email })
        if (user) throw new Error('Already user exists!')

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) throw new Error('Something is wrong ')

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new UserModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully!"
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default userSignUpController