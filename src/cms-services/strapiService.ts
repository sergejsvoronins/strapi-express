import axios from "axios";
import { IAudioSingle, IAudios } from "../models/audio";
import { IComputerSingle, IComputers } from "../models/computer";
import { IMobileSingle, IMobiles } from "../models/mobile";
import { ITelevisions, ITelevisionSingle } from "../models/television";


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
export const getComputers = async () => {
    let response = await axios.get<IComputers>(`${BASE_URL}/computers`);
    return response.data;
}
export const getComputer = async (id:number) => {
    let response = await axios.get<IComputerSingle>(`${BASE_URL}/computers/${id}`);
    return response.data;
}
export const addComputer = async (computer:IComputerSingle) => {
    let response = await axios.post(`${BASE_URL}/computers/`, computer);
    return response.status;
}
export const updateComputer = async (id:number,computer:IComputerSingle) => {
    let response = await axios.put(`${BASE_URL}/computers/${id}`, computer);
    return response.status;
}
export const deleteComputer = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/computers/${id}`);
    return response.status;
}
export const getMobiles = async () => {
    let response = await axios.get<IMobiles>(`${BASE_URL}/mobiles`);
    return response.data;
}
export const getMobile = async (id:number) => {
    let response = await axios.get<IMobileSingle>(`${BASE_URL}/mobiles/${id}`);
    return response.data;
}
export const addMobile = async (mobile:IMobileSingle) => {
    let response = await axios.post(`${BASE_URL}/mobiles/`, mobile);
    return response.status;
}
export const updateMobile = async (id:number,mobile:IMobileSingle) => {
    let response = await axios.put(`${BASE_URL}/mobiles/${id}`, mobile);
    return response.status;
}
export const deleteMobile = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/mobiles/${id}`);
    return response.status;
}
export const getTelevisions = async () => {
    let response = await axios.get<ITelevisions>(`${BASE_URL}/televisions`);
    return response.data;
}
export const getTelevision = async (id:number) => {
    let response = await axios.get<IAudioSingle>(`${BASE_URL}/televisions/${id}`);
    return response.data;
}
export const addTelevision = async (television:ITelevisionSingle) => {
    let response = await axios.post(`${BASE_URL}/televisions/`, television);
    return response.status;
}
export const updateTelevision = async (id:number,television:ITelevisionSingle) => {
    let response = await axios.put(`${BASE_URL}/televisions/${id}`, television);
    return response.status;
}
export const deleteTelevision = async (id:number) => {
    let response = await axios.delete(`${BASE_URL}/televisions/${id}`);
    return response.status;
}