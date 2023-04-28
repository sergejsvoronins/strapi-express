import { useEffect, useState } from "react";
import { ITelevisionData } from "../../models/ITelevisionData";
import { getTelevisions } from "../../services/expressService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";


export const Televisions = () => {
    const [televisions, setTelevisions] = useState<ITelevisionData[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const navigate = useNavigate();
    const { userIsLoggedIn } = useOutletContext<IMyContext>();
    useEffect(()=> {
      const getData = async () => {
        let response = await getTelevisions();
        setTelevisions(response);
        setIsLoaded(true);
      }
      if(isLoaded){ return }
      getData();
    });
    const goToProduct = (id:number) => {
      navigate(`/televisions/${id}`);
    }
    const createProduct = () => {
      navigate("/televisions/create");
    }
    const html = televisions.map((television) => {
      return (
        <div key={television.id} onClick={()=>{goToProduct(television.id)}}>
          <h3>{television.attributes.name}</h3>
          <span>{television.attributes.price}</span>
        </div>
      )
    })
    return (
      <>
        {userIsLoggedIn ?
          <>
            <button onClick={createProduct}>Skapa produkt</button>
            {html}
          </>:
          <>
            {html}
          </>}
      </>
    )
}