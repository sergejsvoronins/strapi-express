import { useEffect, useState } from "react";
import { IComputerData } from "../../models/IComputerData";
import { getComputers } from "../../services/expressService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";


export const Computers = () => {
    const [computers, setComputers] = useState<IComputerData[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { userIsLoggedIn } = useOutletContext<IMyContext>();
    const navigate = useNavigate();
    useEffect(()=> {
      const getData = async () => {
        let response = await getComputers();
        setComputers(response);
        setIsLoaded(true);
      }
      if(isLoaded){ return }
      getData();
    });
    const goToProduct = (id:number) => {
      navigate(`/computers/${id}`);
    }
    const createProduct = () => {
      navigate("/computers/create");
    }
    const html = computers.map((computer) => {
      return (
        <div key={computer.id} onClick={()=>{goToProduct(computer.id)}}>
          <h3>{computer.attributes.name}</h3>
          <span>{computer.attributes.price}:-</span>
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