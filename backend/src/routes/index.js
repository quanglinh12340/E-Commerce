import { Router } from "express";
import userSignUpController from "../controllers/userSignUp.controller.js";
import userSignInController from "../controllers/userSignIn.controller .js";
import authToken from "../middlewares/authToken.middleware.js";
import userDetailsController from "../controllers/userDetails.controller.js";
import { userLogout } from "../controllers/userLogout.controller.js";
import allUserController from "../controllers/allUser.controller.js";
import updateUserController from "../controllers/updateUser.controller.js";
const RootRouter = Router()

RootRouter.post('/signup', userSignUpController)
RootRouter.post('/signin', userSignInController)
RootRouter.get('/user-details', authToken, userDetailsController)
RootRouter.get('/user-logout', userLogout)

//admin-panel
RootRouter.get('/all-user', authToken, allUserController)
RootRouter.post('/update-user', authToken, updateUserController)

export { RootRouter }