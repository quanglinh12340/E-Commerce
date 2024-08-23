
async function userLogout(req, res) {
    try {
        res.clearCookie("token")
        res.json({
            message: "Log out successfully!",
            data: [],
            success: true,
            error: false,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export { userLogout }