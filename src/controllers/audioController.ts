import { Request, Response } from "express";
import { addAudio, deleteAudio, getAudio, getAudios, updateAudio } from "../cms-services/strapiService";
import { IAudioSingle } from "../models/audio";

export const getAllAudios = async (req:Request, res:Response)=>{
    let data = await getAudios();
    data ? res.send(data.data) : res.sendStatus(400);
}
export const getSingleAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id) {
        let data = await getAudio(id);
        data ? res.json(data.data) : res.sendStatus(500);
    }
    else {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}
export const createAudio = async (req:Request, res:Response)=>{
    let newAudio = req.body as IAudioSingle;
    if(!newAudio.data.name || !newAudio.data.description || !newAudio.data.maker || !newAudio.data.effect || !newAudio.data.price) {
        res.send(400);
        return;
    }
    try {
        await addAudio(newAudio);
        res.sendStatus(201);
    } catch (e) {
        res.status(500);
    }

}
export const changeAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
        let updatedAudio = req.body as IAudioSingle;
        if(updatedAudio.data.id !== id){
            res.status(400).json({ message: `Product ID in request body (${updatedAudio.data.id}) does not match product ID in URL (${id})` });
            return;
        }
        try {
            await updateAudio(id,updatedAudio);
            res.json(id);

        } catch (e) {
            res.status(404).json({ message: `Product with id ${id} not found` });

        }
}
export const removeAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    try {
        await deleteAudio(id);
        res.json({ message: `Product with id ${id} deleted successfully` });
    } catch (e) {
        res.status(404).json({ message: `Product with id ${id} not found` });
    }
}