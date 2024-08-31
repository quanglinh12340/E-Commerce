import uploadProductPermission from "../../helpers/permission.js"
import ProductModel from "../../models/product.model.js"

async function uploadProductController(req, res) {
    try {

        const sessionUserId = req.userId
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const uploadProduct = new ProductModel(req.body)
        const saveProduct = uploadProduct.save()

        res.status(201).json({
            message: "Upload product successfully",
            data: saveProduct,
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

export default uploadProductController