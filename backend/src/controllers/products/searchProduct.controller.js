import ProductModel from "../../models/product.model.js"

async function searchProductController(req, res) {
    try {
        const query = req.query.q

        const regex = new RegExp(query, 'i', 'g')

        const product = await ProductModel.find({
            "$or": [
                {
                    productName: regex
                },
                {
                    category: regex
                }
            ]
        })

        res.json({
            message: "Search product list",
            data: product,
            success: true,
            error: false
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default searchProductController