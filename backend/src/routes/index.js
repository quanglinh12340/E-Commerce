import { Router } from "express";

import authToken from "../middlewares/authToken.middleware.js";

import userSignUpController from "../controllers/users/userSignUp.controller.js";
import userSignInController from "../controllers/users/userSignIn.controller .js";
import { userLogout } from "../controllers/users/userLogout.controller.js";
import userDetailsController from "../controllers/users/userDetails.controller.js";
import allUserController from "../controllers/users/allUser.controller.js";
import updateUserController from "../controllers/users/updateUser.controller.js";

import uploadProductController from "../controllers/products/uploadProduct.controller.js";
import getProductController from "../controllers/products/getProduct.controller.js";
import updateProductController from "../controllers/products/updateProduct.controller.js";
import getCategoryProductController from "../controllers/products/getCategoryProductOne.controller.js";
import getCategoryWiseProductController from "../controllers/products/getCategoryWiseProduct.controller.js";
import getProductDetailsController from "../controllers/products/getProductDetails.controller.js";

const RootRouter = Router()

RootRouter.post('/signup', userSignUpController)
RootRouter.post('/signin', userSignInController)
RootRouter.get('/user-details', authToken, userDetailsController)
RootRouter.get('/user-logout', userLogout)

//admin-panel
RootRouter.get('/all-user', authToken, allUserController)
RootRouter.post('/update-user', authToken, updateUserController)

// product
RootRouter.post('/upload-product', authToken, uploadProductController)
RootRouter.get('/get-product', getProductController)
RootRouter.post('/update-product', authToken, updateProductController)
RootRouter.get('/get-categoryProduct', getCategoryProductController)
RootRouter.post('/category-product', getCategoryWiseProductController)
RootRouter.post('/product-details', getProductDetailsController)

export { RootRouter }