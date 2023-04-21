import { Response } from "express";
import { decodeJWT, verifyJWT } from "../utils/utils";

export const authorization = (req:any, res:Response, next:any) => {
    const token = req.headers.authorization;
    
    if (token && verifyJWT(token)) {
        const tokenData = decodeJWT(token)
        req.user = tokenData;
        req.user = { isLoggedIn: true }
    } else {
        req.user = { isLoggedIn: false }
    }
    next()
}

export const forceAuthorize = (req: any, res:Response, next:any) => {
    if(req.user){
        if (req.user.isLoggedIn) {
            next()
        } else {
            res.sendStatus(401)
        }
    }
}