import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { getSingleAudio, getSingleMobile, removeAudio, removeMobile } from "../../services/expressService";
import { IMyContext } from "../../App";
import { IAudio } from "../../models/IAudio";
import { IMobile } from "../../models/IMobile";

export interface IMySingleMobileContext {
    mobile: IMobile,
    token: string
}
const temp =         
    {
        id: 0,
        name: "",
        description: "",
        maker: "",
        screenType: "",
        price: 0
    }
export const SingleMobile = () => {
    const [mobile, setMobile] = useState<IMobile>(temp);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn, token } = useOutletContext<IMyContext>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(id){
            if(isLoaded){return}
            const getMobile = async (id:number) => {
                let getData = await getSingleMobile(id);
                setMobile({
                    id:getData.id,
                    name: getData.attributes.name,
                    description: getData.attributes.description,
                    maker: getData.attributes.maker,
                    screenType: getData.attributes.screenType,
                    price: getData.attributes.price,
                });
                setIsLoaded(true);
            }
            getMobile(+id);
        }
    })
    const changeProduct = () => {
        if(id){
            navigate(`/mobiles/${+id}/update`);
        }
    }
    const deleteProduct = async () => {
        if(id){
            let response = await removeMobile(+id, token);
            navigate("/mobiles");

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
            <Outlet context = {{mobile, token}}></Outlet>
        </div>
    )
}