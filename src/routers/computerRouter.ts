import express from "express";
import { changeComputer, createComputer, getAllComputers, getSingleComputer, removeComputer } from "../controllers/computerController";
import { forceAuthorize } from "../middlewares/midlewares";

export const computerRouter = express.Router();

computerRouter
    .get("/", getAllComputers)
    .get("/:id", getSingleComputer)
    .post("/", forceAuthorize, createComputer)
    .put("/:id", forceAuthorize, changeComputer)
    .delete("/:id", forceAuthorize, removeComputer);