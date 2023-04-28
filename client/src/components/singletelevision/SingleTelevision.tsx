import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { getSingleAudio, getSingleTelevision, removeAudio, removeTelevision } from "../../services/expressService";
import { IMyContext } from "../../App";
import { IAudio } from "../../models/IAudio";
import { ITelevision } from "../../models/ITelevision";

export interface IMySingleTelevisionContext {
    television: ITelevision,
    token: string
}
const temp =         
    {
        id: 0,
        name: "",
        description: "",
        maker: "",
        screenSize: 0,
        price: 0
    }
export const SingleTelevision = () => {
    const [television, setTelevision] = useState<ITelevision>(temp);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn, token } = useOutletContext<IMyContext>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(id){
            if(isLoaded){return}
            const getTelevision = async (id:number) => {
                let getData = await getSingleTelevision(id);
                setTelevision({
                    id:getData.id,
                    name: getData.attributes.name,
                    description: getData.attributes.description,
                    maker: getData.attributes.maker,
                    screenSize: getData.attributes.screenSize,
                    price: getData.attributes.price,
                });
                setIsLoaded(true);
            }
            getTelevision(+id);
        }
    })
    const changeProduct = () => {
        if(id){
            navigate(`/televisions/${+id}/update`);
        }
    }
    const deleteProduct = async () => {
        if(id){
            let response = await removeTelevision(+id, token);
            navigate("/televisions");

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
            <Outlet context = {{television, token}}></Outlet>
        </div>
    )
}