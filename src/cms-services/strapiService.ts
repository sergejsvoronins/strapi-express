import axios from "axios";
import { IAudioSingle, IAudios } from "../models/IAudioResponse";

const BASE_URL = "http://localhost:1337/api";

export const getAudios = async () => {
    let response = await axios.get<IAudios>(`${BASE_URL}/audios`);
    return response.data;
}
export const getAudio = async (id:number) => {
    let response = await axios.get<IAudioSingle>(`${BASE_URL}/audios/${id}`);
    return response.data;
}
export const addAudio = async (audio:IAudioSingle) => {
    let response = await axios.post(`${BASE_URL}/audios/`, audio);
    return response.status;
}
export const updateAudio = async (id:number,audio:IAudioSingle) => {
    let response = await axios.put(`${BASE_URL}/audios/${id}`, audio);
    return response.status;
}
export const deleteAudio = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/audios/${id}`);
    return response.status;
}