import express, { Response } from "express";
import { audioRouter } from "./routers/audioRouter";
import { computerRouter } from "./routers/computerRouter";
import { mobileRouter } from "./routers/mobileRouter";
import { televisionRouter } from "./routers/televisionRouter";
import { userRouter } from "./routers/userRouter";
import { authorization } from "./middlewares/midlewares";

const app = express();
const PORT = 8008;
app.use(express.json());
app.use(express.urlencoded());
app.use(authorization);
app.use("/users", userRouter);
app.use("/audios", audioRouter);
app.use("/computers", computerRouter);
app.use("/mobiles", mobileRouter);
app.use("/televisions", televisionRouter);
app.get("/", (req:any, res:Response)=>{
    res.send({
        start: "Startpage",
        user: req.user
    });
})
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
    
})