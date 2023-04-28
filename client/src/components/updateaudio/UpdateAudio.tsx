import { useOutletContext, useParams } from "react-router-dom"
import { IMySingleAudioContext } from "../singleaudio/SingleAudio"
import { ChangeEvent, FormEvent, useState } from "react";
import { updateAudio } from "../../services/expressService";
import { IAudio } from "../../models/IAudio";

export const UpdateAudio = () => {
    const { audio, token } = useOutletContext<IMySingleAudioContext>();
    const [ newAudio, setNewAudio ] = useState<IAudio>(audio);
    const { id } = useParams();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newAudio, [e.target.name]:e.target.value};
        setNewAudio(temp);
    }
    const handleClick = async () => {
        if(id){
            let response = await updateAudio(+id, token, newAudio);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input 
            type="text"
            id="name"
            name="name"
            value = {newAudio.name}
            onChange={handleChange} />
        <label htmlFor="description">Beskrivning</label>
        <input 
            type="text"
            id="description"
            name="description"
            value = {newAudio.description}
            onChange={handleChange} />
        <label htmlFor="maker">Märke</label>
        <input 
            type="text"
            id="maker"
            name="maker"
            value = {newAudio.maker}
            onChange={handleChange} />
        <label htmlFor="effect">Effekt</label>
        <input 
            type="number"
            id="effect"
            name="effect"
            value = {newAudio.effect}
            onChange={handleChange} />
        <label htmlFor="price">Pris</label>
        <input 
            type="number"
            id="price"
            name="price"
            value = {newAudio.price}
            onChange={handleChange} />
        <button onClick={handleClick}>Ändra</button>
    </form>
    )
}