import express, { Request, Response } from "express";
import { changeTelevision, createTelevision, getAllTelevisions, getSingleTelevision, removeTelevision } from "../controllers/televisionController";

export const televisionRouter = express.Router();

televisionRouter
    .get("/", getAllTelevisions)
    .get("/:id", getSingleTelevision)
    .post("/", createTelevision)
    .put("/:id", changeTelevision)
    .delete("/:id", removeTelevision);