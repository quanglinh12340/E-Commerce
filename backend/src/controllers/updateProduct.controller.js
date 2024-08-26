import uploadProductPermission from "../helpers/permission.js";
import ProductModel from "../models/product.model.js";

async function updateProductController(req, res) {
    try {
        if (!uploadProductPermission(req.userId)) {
            throw new Error('Permission denied')
        }

        const { _id, ...resBody } = req.body

        const updateProduct = await ProductModel.findByIdAndUpdate(_id, resBody)

        res.json({
            message: "Product update successfully",
            data: updateProduct,
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

export default updateProductController