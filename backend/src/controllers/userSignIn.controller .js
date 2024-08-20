import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) throw new Error('Please provide email!')
        if (!password) throw new Error('Please provide password!')

        const user = await UserModel.findOne({ email })
        if (!user) throw new Error(' User not found!')

        const checkPassword = await bcrypt.compare(password, user.password)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email
            }

            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 })
            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            res.cookie("token", token, tokenOption).status(200).send({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            })
        } else {
            throw new Error('Please check Password')
        }

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default userSignInController