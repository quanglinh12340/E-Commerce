import ProductModel from "../../models/product.model.js"

const getCategoryProductController = async (req, res) => {
    try {
        const productCategory = await ProductModel.distinct("category")
        console.log("🚀 ~ getCategoryProductController ~ productCategory:", productCategory)

        const productByCategory = []

        for (const category of productCategory) {
            const product = await ProductModel.findOne({ category })
            if (product) productByCategory.push(product)
        }

        res.json({
            message: "Product category",
            data: productByCategory,
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

export default getCategoryProductController