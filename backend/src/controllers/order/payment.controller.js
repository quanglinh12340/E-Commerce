import stripe from "../../config/stripe.js";
import UserModel from "../../models/user.model.js";

const paymentController = async (req, res) => {
    try {

        const { cartItems } = req.body
        console.log("🚀 ~ paymentController ~ cartItems:", cartItems)

        const user = await UserModel.findOne({ _id: req.userId })

        const params = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: "auto",
            shipping_options: [
                {
                    shipping_rate: 'shr_1PxkbmAaacNpiW2zuvjaFxwt'
                }
            ],
            customer_email: user.email,
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: item.productId.productName,
                            images: item.productId.productImage,
                            metadata: {
                                productId: item.productId._id
                            },
                        },
                        unit_amount: item.productId.sellingPrice
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        }

        const session = await stripe.checkout.sessions.create(params)

        res.status(303).json(session)
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default paymentController