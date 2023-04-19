import { Request, Response } from "express";
import { addComputer, addMobile, deleteComputer, deleteMobile, getComputer, getComputers, getMobile, getMobiles, updateComputer, updateMobile } from "../cms-services/strapiService";
import { IComputerSingle } from "../models/computer";
import { IMobileSingle } from "../models/mobile";

export const getAllMobiles = async (req:Request, res:Response)=>{
    let data = await getMobiles();
    data ? res.send(data.data) : res.sendStatus(400);
}
export const getSingleMobile = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id) {
        let data = await getMobile(id);
        data ? res.json(data.data) : res.sendStatus(500);
    }
    else {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}
export const createMobile = async (req:Request, res:Response)=>{
    let newMobile = req.body as IMobileSingle;
    if(!newMobile.data.name || !newMobile.data.description || !newMobile.data.maker || !newMobile.data.screenType || !newMobile.data.price) {
        res.send(400);
        return;
    }
    try {
        await addMobile(newMobile);
        res.sendStatus(201);
    } catch (e) {
        res.status(500);
    }

}
export const changeMobile = async (req:Request, res:Response)=>{
    const id = +req.params.id;
        let updatedMobile = req.body as IMobileSingle;
        if(updatedMobile.data.id !== id){
            res.status(400).json({ message: `Product ID in request body (${updatedMobile.data.id}) does not match product ID in URL (${id})` });
            return;
        }
        try {
            await updateMobile(id,updatedMobile);
            res.json(id);

        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` });

        }
}
export const removeMobile = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    try {
        await deleteMobile(id);
        res.json({ message: `Product with id ${id} deleted successfully` });
    } catch (e) {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}