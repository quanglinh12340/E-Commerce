import { Router } from "express";
import userSignUpController from "../controllers/userSignUp.controller.js";
import userSignInController from "../controllers/userSignIn.controller .js";
import authToken from "../middlewares/authToken.middleware.js";
import userDetailsController from "../controllers/userDetails.controller.js";
import { userLogout } from "../controllers/userLogout.controller.js";

const RootRouter = Router()

RootRouter.post('/signup', userSignUpController)
RootRouter.post('/signin', userSignInController)
RootRouter.get('/user-details', authToken, userDetailsController)
RootRouter.get('/user-logout', userLogout)

export { RootRouter }