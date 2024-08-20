import { Router } from "express";
import userSignUpController from "../controllers/userSignUp.controller.js";
import userSignInController from "../controllers/userSignIn.controller .js";

const RootRouter = Router()

RootRouter.post('/signup', userSignUpController)
RootRouter.post('/signin', userSignInController)

export { RootRouter }