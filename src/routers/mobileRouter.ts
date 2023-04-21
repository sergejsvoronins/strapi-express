import express from "express";
import { changeMobile, createMobile, getAllMobiles, getSingleMobile, removeMobile } from "../controllers/mobileController";
import { forceAuthorize } from "../middlewares/midlewares";

export const mobileRouter = express.Router();

mobileRouter
    .get("/", getAllMobiles)
    .get("/:id", getSingleMobile)
    .post("/", forceAuthorize, createMobile)
    .put("/:id", forceAuthorize, changeMobile)
    .delete("/:id", forceAuthorize, removeMobile);