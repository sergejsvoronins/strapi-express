import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { getSingleComputer, getSingleMobile, removeComputer, removeMobile } from "../../services/expressService";
import { IMyContext } from "../../App";
import { IComputer } from "../../models/IComputer";

export interface IMySingleComputerContext {
    computer: IComputer,
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
export const SingleComputer = () => {
    const [computer, setComputer] = useState<IComputer>(temp);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn, token } = useOutletContext<IMyContext>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(id){
            if(isLoaded){return}
            const getComputer= async (id:number) => {
                let getData = await getSingleComputer(id);
                setComputer({
                    id:getData.id,
                    name: getData.attributes.name,
                    description: getData.attributes.description,
                    maker: getData.attributes.maker,
                    screenType: getData.attributes.screenType,
                    price: getData.attributes.price,
                });
                setIsLoaded(true);
            }
            getComputer(+id);
        }
    })
    const changeProduct = () => {
        if(id){
            navigate(`/computers/${+id}/update`);
        }
    }
    const deleteProduct = async () => {
        if(id){
            let response = await removeComputer(+id, token);
            navigate("/computers");

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
            <Outlet context = {{computer, token}}></Outlet>
        </div>
    )
}