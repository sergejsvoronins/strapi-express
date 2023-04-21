import { Request, Response } from "express";
import { addTelevision, deleteTelevision, getTelevision, getTelevisions, updateTelevision } from "../services/strapiService";
import { ITelevisionSingle } from "../models/television";

export const getAllTelevisions = async (req:Request, res:Response)=>{
    let data = await getTelevisions();
    data ? res.send(data.data) : res.sendStatus(400);
}
export const getSingleTelevision = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id) {
        let data = await getTelevision(id);
        data ? res.json(data.data) : res.sendStatus(500);
    }
    else {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}
export const createTelevision = async (req:Request, res:Response)=>{
    let newTelevision = req.body as ITelevisionSingle;
    if(!newTelevision.data.name || !newTelevision.data.description || !newTelevision.data.maker || !newTelevision.data.screenSize || !newTelevision.data.price) {
        res.send(400);
        return;
    }
    try {
        await addTelevision(newTelevision);
        res.sendStatus(201);
    } catch (e) {
        res.status(500);
    }

}
export const changeTelevision = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    let updatedTelevision = req.body as ITelevisionSingle;
    if(updatedTelevision.data.id !== id){
        res.status(400).json({ message: `Product ID in request body (${updatedTelevision.data.id}) does not match product ID in URL (${id})` });
        return;
    }
    try {
        await updateTelevision(id,updatedTelevision);
        res.json(id);

        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` });

        }
}
export const removeTelevision = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    try {
        await deleteTelevision(id);
        res.json({ message: `Product with id ${id} deleted successfully` });
    } catch (e) {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}