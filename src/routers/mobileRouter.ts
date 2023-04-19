import express, { Request, Response } from "express";
import { changeMobile, createMobile, getAllMobiles, getSingleMobile, removeMobile } from "../controllers/mobileController";

export const mobileRouter = express.Router();

mobileRouter
    .get("/", getAllMobiles)
    .get("/:id", getSingleMobile)
    .post("/", createMobile)
    .put("/:id", changeMobile)
    .delete("/:id", removeMobile);