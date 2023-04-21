import express from "express";
import { changeAudio, createAudio, getAllAudios, getSingleAudio, removeAudio } from "../controllers/audioController";
import { forceAuthorize } from "../middlewares/midlewares";

export const audioRouter = express.Router();

audioRouter
    .get("/", getAllAudios)
    .get("/:id", getSingleAudio)
    .post("/", forceAuthorize, createAudio)
    .put("/:id", forceAuthorize, changeAudio)
    .delete("/:id", forceAuthorize, removeAudio);