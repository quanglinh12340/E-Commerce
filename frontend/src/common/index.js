const backendDomain = "http://localhost:8080"

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "POST"
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "POST"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "GET"
    },
    logout_user: {
        url: `${backendDomain}/api/user-logout`,
        method: "GET"
    },
    all_user: {
        url: `${backendDomain}/api/all-user`,
        method: "GET"
    },
    update_user: {
        url: `${backendDomain}/api/update-user`,
        method: "POST"
    },
    upload_product: {
        url: `${backendDomain}/api/upload-product`,
        method: "POST"
    },
    get_product: {
        url: `${backendDomain}/api/get-product`,
        method: "GET"
    },
    update_product: {
        url: `${backendDomain}/api/update-product`,
        method: "POST"
    },
    category_product: {
        url: `${backendDomain}/api/get-CategoryProduct`,
        method: "GET"
    },
    category_wise_product: {
        url: `${backendDomain}/api/category-product`,
        method: "POST"
    },
    product_details: {
        url: `${backendDomain}/api/product-details`,
        method: "POST"
    },
    addToCart_product: {
        url: `${backendDomain}/api/addToCart`,
        method: "POST"
    },
    addToCart_product_count: {
        url: `${backendDomain}/api/countAddToCartProduct`,
        method: "GET"
    },
    addToCart_product_view: {
        url: `${backendDomain}/api/view-cart-product`,
        method: "GET"
    },
    updateCart_product: {
        url: `${backendDomain}/api/update-cart-product`,
        method: "POST"
    },
    deleteCart_product: {
        url: `${backendDomain}/api/delete-cart-product`,
        method: "POST"
    },
}

export default SummaryApi