import { useEffect, useState } from "react";
import { IAudioDevices } from "../../models/IAudioData";
import { getAudios } from "../../services/expressService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";

export const Audio = () => {
    const [audioDevices, setAudioDevices] = useState<IAudioDevices[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const navigate = useNavigate();
    const { userIsLoggedIn } = useOutletContext<IMyContext>();
    useEffect(()=> {
      const getData = async () => {
        let response = await getAudios();
        setAudioDevices(response);
        setIsLoaded(true);
      }
      if(isLoaded){ return }
      getData();
    });
    const goToProduct = (id:number) => {
      navigate(`/audio/${id}`);
    }
    const createProduct = () => {
      navigate("/audio/create");
    }
    const html = audioDevices.map((audio) => {
      return (
        <div key={audio.id} onClick={()=>{goToProduct(audio.id)}}>
          <h3>{audio.attributes.name}</h3>
          <span>{audio.attributes.price}:-</span>
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