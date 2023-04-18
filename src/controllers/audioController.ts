import { Request, Response } from "express";
import { addAudio, deleteAudio, getAudio, getAudios, updateAudio } from "../cms-services/strapiService";
import { IAudioSingle } from "../models/IAudioResponse";

export const getAllAudios = async (req:Request, res:Response)=>{
    let data = await getAudios();
    data ? res.send(data.data) : res.sendStatus(400);
}
export const getSingleAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id) {
        let data = await getAudio(id);
        data ? res.send(data.data) : res.sendStatus(500);
    }
    else {
        res.sendStatus(400)
    }
}
export const createAudio = async (req:Request, res:Response)=>{
    let newAudio: IAudioSingle = {
        data:{
            name: req.body.data.name,
            description: req.body.data.description,
            maker: req.body.data.maker,
            price: req.body.data.price,
            effect: req.body.data.effect
        }
    };
    let response = await addAudio(newAudio);
    res.send(response);
}
export const changeAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id){
        let updatedAudio: IAudioSingle = {
            data:{
                name: req.body.data.name,
                description: req.body.data.description,
                maker: req.body.data.maker,
                price: req.body.data.price,
                effect: req.body.data.effect
            }
        };
        let response = await updateAudio(id,updatedAudio);
        res.send(response);
    }
    else {
        res.sendStatus(400);
    }
}
export const removeAudio = async (req:Request, res:Response)=>{
    const id = +req.params.id;
    if(id){
        let data = await deleteAudio(id);
        res.sendStatus(data)
    }
    else {
        res.sendStatus(400);
    }
}