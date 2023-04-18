import express, { Request, Response } from "express";

export const televisionRouter = express.Router();

televisionRouter
    .get("/", (req:Request, res:Response)=>{
    })
    .get("/:id", (req:Request, res:Response)=>{
    })
    .post("/", (req:Request, res:Response)=>{
    })
    .put("/:id", (req:Request, res:Response)=>{
    })
    .delete("/:id", (req:Request, res:Response)=>{
    });