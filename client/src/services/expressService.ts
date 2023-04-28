import axios from "axios";
import { IAudioDevices } from "../models/IAudioData";
import { IMobileData } from "../models/IMobileData";
import { IComputerData } from "../models/IComputerData";
import { ITelevisionData } from "../models/ITelevisionData";
import { IUserStatus } from "../models/IUserStatus";
import { IUser } from "../models/IUser";
import { IRegisterMessageResponse } from "../models/IRegisterMessageResponse";
import { IAudio } from "../models/IAudio";
import { IMobile } from "../models/IMobile";
import { IComputer } from "../models/IComputer";
import { ITelevision } from "../models/ITelevision";


const BASE_URL = "http://localhost:8008";

export const getUserStatus = async () => {
    let response = await axios.get<IUserStatus>(BASE_URL);
    return response.data;
};
export const registerUser = async (user:IUser) => {
    let response = await axios.post<IRegisterMessageResponse>(`${BASE_URL}/users/register`, user);
    return response.data;
};
export const loginUser = async (user:IUser) => {
    let response = await axios.post<string>(`${BASE_URL}/users/login`, user);
    return response.data;
};

export const getAudios = async () => {
    let response = await axios.get<IAudioDevices[]>(`${BASE_URL}/audios`);
    return response.data;
};
export const getSingleAudio = async (id:number) => {
    let response = await axios.get<IAudioDevices>(`${BASE_URL}/audios/${id}`);
    return response.data;
};
export const addAudio = async (token:string, audio:IAudio) => {
    let response = await axios.post(`${BASE_URL}/audios`, 
    {
        data: audio
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const updateAudio = async (id:number,token:string, audio:IAudio) => {
    let response = await axios.put(`${BASE_URL}/audios/${id}`, 
    {
        data: audio
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const removeAudio = async (id:number, token:string) => {
    let response = await axios.delete(`${BASE_URL}/audios/${id}`, 
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const getMobiles = async () => {
    let response = await axios.get<IMobileData[]>(`${BASE_URL}/mobiles`);
    return response.data;
};
export const getSingleMobile= async (id:number) => {
    let response = await axios.get<IMobileData>(`${BASE_URL}/mobiles/${id}`);
    return response.data;
};
export const addMobile = async (token:string, mobile:IMobile) => {
    let response = await axios.post(`${BASE_URL}/mobiles`, 
    {
        data: mobile
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const updateMobile = async (id:number,token:string, mobile:IMobile) => {
    let response = await axios.put(`${BASE_URL}/mobiles/${id}`, 
    {
        data: mobile
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}
export const removeMobile = async (id:number, token:string) => {
    let response = await axios.delete(`${BASE_URL}/mobiles/${id}`, 
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}
export const getComputers = async () => {
    let response = await axios.get<IComputerData[]>(`${BASE_URL}/computers`);
    return response.data;
};
export const getSingleComputer= async (id:number) => {
    let response = await axios.get<IComputerData>(`${BASE_URL}/computers/${id}`);
    return response.data;
};
export const addComputer = async (token:string, computer:IComputer) => {
    let response = await axios.post(`${BASE_URL}/computers`, 
    {
        data: computer
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const updateComputer = async (id:number,token:string, computer:IComputer) => {
    let response = await axios.put(`${BASE_URL}/computers/${id}`, 
    {
        data: computer
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}
export const removeComputer = async (id:number, token:string) => {
    let response = await axios.delete(`${BASE_URL}/computers/${id}`, 
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}
export const getTelevisions= async () => {
    let response = await axios.get<ITelevisionData[]>(`${BASE_URL}/televisions`);
    return response.data;
};
export const getSingleTelevision= async (id:number) => {
    let response = await axios.get<ITelevisionData>(`${BASE_URL}/televisions/${id}`);
    return response.data;
};
export const addTelevision = async (token:string, television:ITelevision) => {
    let response = await axios.post(`${BASE_URL}/televisions`, 
    {
        data: television
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
};
export const updateTelevision= async (id:number,token:string, television:ITelevision) => {
    let response = await axios.put(`${BASE_URL}/televisions/${id}`, 
    {
        data: television
    },
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}
export const removeTelevision= async (id:number, token:string) => {
    let response = await axios.delete(`${BASE_URL}/televisions/${id}`, 
    {
        headers: {
            authorization: token
        }
    });
    return response.data;
}