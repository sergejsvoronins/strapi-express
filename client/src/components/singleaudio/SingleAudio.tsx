import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { getSingleAudio, removeAudio } from "../../services/expressService";
import { IMyContext } from "../../App";
import { IAudio } from "../../models/IAudio";

export interface IMySingleAudioContext {
    audio: IAudio,
    token: string
}
const temp =         
    {
        id: 0,
        name: "",
        description: "",
        maker: "",
        effect: 0,
        price: 0
    }
export const SingleAudio = () => {
    const [audio, setAudio] = useState<IAudio>(temp);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn, token } = useOutletContext<IMyContext>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(id){
            if(isLoaded){return}
            const getAudio = async (id:number) => {
                let getData = await getSingleAudio(id);
                setAudio({
                    id:getData.id,
                    name: getData.attributes.name,
                    description: getData.attributes.description,
                    maker: getData.attributes.maker,
                    effect: getData.attributes.effect,
                    price: getData.attributes.price,
                });
                setIsLoaded(true);
            }
            getAudio(+id);
        }
    })
    const changeProduct = () => {
        if(id){
            navigate(`/audio/${+id}/update`);
        }
    }
    const deleteProduct = async () => {
        if(id){
            let response = await removeAudio(+id, token);
            navigate("/audio");

        }
    }
    return (
        <div>
            {userIsLoggedIn ?
                <div>
                    <button onClick={changeProduct}>Ändra produkt</button>
                    <button onClick={deleteProduct}>Radera produkt</button>
                </div> :
                <div></div>
            }
            <Outlet context = {{audio, token}}></Outlet>
        </div>
    )
}