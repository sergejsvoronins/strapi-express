import express, { Request, Response } from "express";
import { changeComputer, createComputer, getAllComputers, getSingleComputer, removeComputer } from "../controllers/computerController";

export const computerRouter = express.Router();

computerRouter
    .get("/", getAllComputers)
    .get("/:id", getSingleComputer)
    .post("/", createComputer)
    .put("/:id", changeComputer)
    .delete("/:id", removeComputer);