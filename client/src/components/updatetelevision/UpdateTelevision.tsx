import { useOutletContext, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { IMySingleTelevisionContext } from "../singletelevision/SingleTelevision";
import { ITelevision } from "../../models/ITelevision";
import { updateTelevision } from "../../services/expressService";

export const UpdateTelevision = () => {
    const { television, token } = useOutletContext<IMySingleTelevisionContext>();
    const [ newTelevision, setNewTelevision ] = useState<ITelevision>(television);
    const { id } = useParams();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newTelevision, [e.target.name]:e.target.value};
        setNewTelevision(temp);
    }
    const handleClick = async () => {
        if(id){
            let response = await updateTelevision(+id, token, newTelevision);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input 
            type="text"
            id="name"
            name="name"
            value = {newTelevision.name}
            onChange={handleChange} />
        <label htmlFor="description">Beskrivning</label>
        <input 
            type="text"
            id="description"
            name="description"
            value = {newTelevision.description}
            onChange={handleChange} />
        <label htmlFor="maker">Märke</label>
        <input 
            type="text"
            id="maker"
            name="maker"
            value = {newTelevision.maker}
            onChange={handleChange} />
        <label htmlFor="screenSize">Skärm storlek</label>
        <input 
            type="number"
            id="screenSize"
            name="screenSize"
            value = {newTelevision.screenSize}
            onChange={handleChange} />
        <label htmlFor="price">Pris</label>
        <input 
            type="number"
            id="price"
            name="price"
            value = {newTelevision.price}
            onChange={handleChange} />
        <button onClick={handleClick}>Ändra</button>
    </form>
    )
}