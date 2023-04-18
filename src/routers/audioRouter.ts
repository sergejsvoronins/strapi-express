import express, { Request, Response } from "express";
import { changeAudio, createAudio, getAllAudios, getSingleAudio, removeAudio } from "../controllers/audioController";

export const audioRouter = express.Router();

audioRouter
    .get("/", getAllAudios)
    .get("/:id", getSingleAudio)
    .post("/", createAudio)
    .put("/:id", changeAudio)
    .delete("/:id", removeAudio);