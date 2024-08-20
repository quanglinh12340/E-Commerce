import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: String,
    profilePic: String,
}, {
    timestamps: true
})

const UserModel = mongoose.model('users', userSchema)

export default UserModel