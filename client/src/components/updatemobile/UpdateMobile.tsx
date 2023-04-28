import { useOutletContext, useParams } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react";
import { updateMobile } from "../../services/expressService";
import { IMySingleMobileContext } from "../singlemobile/SingleMobile";
import { IMobile } from "../../models/IMobile";

export const UpdateMobile = () => {
    const { mobile, token } = useOutletContext<IMySingleMobileContext>();
    const [ newMobile, setNewAudio ] = useState<IMobile>(mobile);
    const { id } = useParams();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newMobile, [e.target.name]:e.target.value};
        setNewAudio(temp);
    }
    const handleClick = async () => {
        if(id){
            let response = await updateMobile(+id, token, newMobile);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input 
            type="text"
            id="name"
            name="name"
            value = {newMobile.name}
            onChange={handleChange} />
        <label htmlFor="description">Beskrivning</label>
        <input 
            type="text"
            id="description"
            name="description"
            value = {newMobile.description}
            onChange={handleChange} />
        <label htmlFor="maker">Märke</label>
        <input 
            type="text"
            id="maker"
            name="maker"
            value = {newMobile.maker}
            onChange={handleChange} />
        <label htmlFor="screenType">Skärm</label>
        <input 
            type="text"
            id="screenType"
            name="screenType"
            value = {newMobile.screenType}
            onChange={handleChange} />
        <label htmlFor="price">Pris</label>
        <input 
            type="number"
            id="price"
            name="price"
            value = {newMobile.price}
            onChange={handleChange} />
        <button onClick={handleClick}>Ändra</button>
    </form>
    )
}