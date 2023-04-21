import express from "express";
import { loginAccount, registerAccount } from "../controllers/userController";

export const userRouter = express.Router();

userRouter
    .post("/register", registerAccount)
    .post("/login", loginAccount);