import jwt from 'jsonwebtoken'

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token

        if (!token) {
            return res.status(200).json({
                message: "Please log in",
                success: false,
                error: true
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            console.log("🚀 ~ jwt.verify ~ err:", err)
            console.log("🚀 ~ jwt.verify ~ decoded:", decoded)
            if (err) {
                return res.status(400).json({
                    message: 'Invalid or expired token',
                    success: false,
                    error: true
                });
            }

            req.userId = decoded?._id;
            next();
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false
        })
    }
}

export default authToken