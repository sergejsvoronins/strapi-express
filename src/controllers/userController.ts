import { Request, Response } from "express";
import { IUser } from "../models/user";
import { comparePassword, getJWTToken, hashPassword } from "../utils/utils";
import { getAccountByUsername, registerUser } from "../services/dbService";

export const registerAccount = (req:Request, res:Response) => {
    const newUser = req.body as IUser;
    const hashedPassword = hashPassword(newUser.password);
    registerUser(newUser.username, hashedPassword, (err:Error)=>{
        if(err){
            res.status(500).send(err);
        }
        else {
            res.sendStatus(200);
        }
    })
};
export const loginAccount = (req:Request, res:Response) => {
    const newUser = req.body as IUser;

    getAccountByUsername(newUser.username, (error:Error, account:any) => {
        if (error) {
            res.status(500).send(error)
        } else if (account) {
            console.log(account);
            const hashedPassword = account.hashedPassword
            const correctPassword = comparePassword(newUser.password, hashedPassword)
            if (correctPassword) {
                const jwtToken = getJWTToken(account)
                console.log(jwtToken);
                res.send(jwtToken)
            } else {
                res.sendStatus(404)
            }

        } else {
            res.sendStatus(404)
        }
    })
};

