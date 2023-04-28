import { useEffect, useState } from "react";
import { getMobiles } from "../../services/expressService";
import { IMobileData } from "../../models/IMobileData";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";

export const Mobiles = () => {
    const [mobiles, setMobiles] = useState<IMobileData[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn } = useOutletContext<IMyContext>();
    const navigate = useNavigate();
    useEffect(()=> {
      const getData = async () => {
        let response = await getMobiles();
        setMobiles(response);
        setIsLoaded(true);
      }
      if(isLoaded){ return }
      getData();
    });
    const goToProduct = (id:number) => {
      navigate(`/mobiles/${id}`);
    }
    const createProduct = () => {
      navigate("/mobiles/create");
    }
    const html = mobiles.map((mobile) => {
      return (
        <div key={mobile.id} onClick={()=>{goToProduct(mobile.id)}}>
          <h3>{mobile.attributes.name}</h3>
          <span>{mobile.attributes.price}:-</span>
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