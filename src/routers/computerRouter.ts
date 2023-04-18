import express, { Request, Response } from "express";

export const computerRouter = express.Router();

computerRouter
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