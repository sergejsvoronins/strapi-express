import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Audio } from "./components/audio/Audio";
import { Mobiles } from "./components/mobiles/Mobiles";
import { Computers } from "./components/computers/Computers";
import { Televisions } from "./components/televisions/Televisions";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { SingleAudio } from "./components/singleaudio/SingleAudio";
import { CreateAudio } from "./components/createaudio/CreateAudio";
import { UpdateAudio } from "./components/updateaudio/UpdateAudio";
import { SingleAudioData } from "./components/singleaudiodata/SingleAudioData";
import { SingleMobile } from "./components/singlemobile/SingleMobile";
import { SingleMobileData } from "./components/singlemobiledata/SingleMobileData";
import { UpdateMobile } from "./components/updatemobile/UpdateMobile";
import { CreateMobile } from "./components/createmobile/CreateMobile";
import { SingleComputerData } from "./components/singlecomputerdata/SingleComputerData";
import { SingleComputer } from "./components/singlecomputer/SingleComputer";
import { UpdateComputer } from "./components/updatecomputer/UpdateComputer";
import { CreateComputer } from "./components/createcomputer/CreateComputer";
import { SingleTelevision } from "./components/singletelevision/SingleTelevision";
import { SingleTelevisionData } from "./components/singletelevisiondata/SingleTelevisionData";
import { UpdateTelevision } from "./components/updatetelevision/UpdateTelevision";
import { CreateTelevision } from "./components/createtelevision/CreateTelevision";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/audio",
                element: <Audio />
            },
            {
                path: "/audio/:id",
                element: <SingleAudio />,
                children: [
                    {
                        path: "/audio/:id",
                        element: <SingleAudioData />
                    },
                    {
                        path: "/audio/:id/update",
                        element: <UpdateAudio />
                    },
                ]
            },
            {
                path: "/audio/create",
                element: <CreateAudio />
            },
            {
                path: "/mobiles",
                element: <Mobiles />
            },
            {
                path: "/mobiles/:id",
                element: <SingleMobile />,
                children: [
                    {
                        path: "/mobiles/:id",
                        element: <SingleMobileData />
                    },
                    {
                        path: "/mobiles/:id/update",
                        element: <UpdateMobile />
                    },
                ]
            },
            {
                path: "/mobiles/create",
                element: <CreateMobile />
            },
            {
                path: "/computers",
                element: <Computers />
            },
            {
                path: "/computers/:id",
                element: <SingleComputer />,
                children: [
                    {
                        path: "/computers/:id",
                        element: <SingleComputerData />
                    },
                    {
                        path: "/computers/:id/update",
                        element: <UpdateComputer />
                    },
                ]
            },
            {
                path: "/computers/create",
                element: <CreateComputer />
            },
            {
                path: "/televisions",
                element: <Televisions />
            },
            {
                path: "/televisions/:id",
                element: <SingleTelevision />,
                children: [
                    {
                        path: "/televisions/:id",
                        element: <SingleTelevisionData />
                    },
                    {
                        path: "/televisions/:id/update",
                        element: <UpdateTelevision />
                    },
                ]
            },
            {
                path: "/televisions/create",
                element: <CreateTelevision />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])