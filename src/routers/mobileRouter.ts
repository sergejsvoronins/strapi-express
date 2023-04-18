import express, { Request, Response } from "express";

export const mobileRouter = express.Router();

mobileRouter
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