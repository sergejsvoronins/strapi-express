import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import * as dotenv from 'dotenv';
dotenv.config();

export const hashPassword = (password:string) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

export const comparePassword = (password:string, hash:string) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}
export const getJWTToken = (account:IUser) => {
    const userData = { userId: account.id, username: account.username }
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET as any)
    return accessToken
}

export const verifyJWT = (token:string) => {
    return jwt.verify(token, process.env.JWT_SECRET as any)
}

export const decodeJWT = (token:string) => {
    return jwt.decode(token, process.env.JWT_SECRET as any)
}