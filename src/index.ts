import express, { Request, Response } from "express";
import { audioRouter } from "./routers/audioRouter";
import { computerRouter } from "./routers/computerRouter";
import { mobileRouter } from "./routers/mobileRouter";
import { televisionRouter } from "./routers/televisionRouter";

const app = express();
const PORT = 8008;
app.use(express.json());
app.use(express.urlencoded());
// app.use("/users", userRouter);
app.use("/audios", audioRouter);
app.use("/computers", computerRouter);
app.use("/mobiles", mobileRouter);
app.use("/televisions", televisionRouter);
app.get("/", (req:Request, res:Response)=>{
    res.send("it is working");
})
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
    
})