import express from "express";
import { changeTelevision, createTelevision, getAllTelevisions, getSingleTelevision, removeTelevision } from "../controllers/televisionController";
import { forceAuthorize } from "../middlewares/midlewares";

export const televisionRouter = express.Router();

televisionRouter
    .get("/", getAllTelevisions)
    .get("/:id", getSingleTelevision)
    .post("/", forceAuthorize, createTelevision)
    .put("/:id", forceAuthorize, changeTelevision)
    .delete("/:id", forceAuthorize, removeTelevision);