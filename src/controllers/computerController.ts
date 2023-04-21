import { Request, Response } from "express";
import { addComputer, deleteComputer, getComputer, getComputers, updateComputer } from "../services/strapiService";
import { IComputerSingle } from "../models/computer";

export const getAllComputers = async (req:Request, res:Response)=>{
    let data = await getComputers();
    data ? res.send(data.data) : res.sendStatus(400);
}
export const getSingleComputer = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id) {
        let data = await getComputer(id);
        data ? res.json(data.data) : res.sendStatus(500);
    }
    else {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}
export const createComputer = async (req:Request, res:Response)=>{
    let newComputer = req.body as IComputerSingle;
    if(!newComputer.data.name || !newComputer.data.description || !newComputer.data.maker || !newComputer.data.screenType || !newComputer.data.price) {
        res.send(400);
        return;
    }
    try {
        await addComputer(newComputer);
        res.sendStatus(201);
    } catch (e) {
        res.status(500);
    }

}
export const changeComputer = async (req:Request, res:Response)=>{
    const id = +req.params.id;
        let updatedComputer = req.body as IComputerSingle;
        if(updatedComputer.data.id !== id){
            res.status(400).json({ message: `Product ID in request body (${updatedComputer.data.id}) does not match product ID in URL (${id})` });
            return;
        }
        try {
            await updateComputer(id,updatedComputer);
            res.json(id);

        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` });

        }
}
export const removeComputer = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    try {
        await deleteComputer(id);
        res.json({ message: `Product with id ${id} deleted successfully` });
    } catch (e) {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}