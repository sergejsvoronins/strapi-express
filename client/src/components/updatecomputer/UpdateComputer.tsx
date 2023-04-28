import { useOutletContext, useParams } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react";
import { updateComputer } from "../../services/expressService";
import { IMySingleComputerContext } from "../singlecomputer/SingleComputer";
import { IComputer } from "../../models/IComputer";

export const UpdateComputer = () => {
    const { computer, token } = useOutletContext<IMySingleComputerContext>();
    const [ newComputer, setNewComputer ] = useState<IComputer>(computer);
    const { id } = useParams();
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newComputer, [e.target.name]:e.target.value};
        setNewComputer(temp);
    }
    const handleClick = async () => {
        if(id){
            let response = await updateComputer(+id, token, newComputer);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input 
            type="text"
            id="name"
            name="name"
            value = {newComputer.name}
            onChange={handleChange} />
        <label htmlFor="description">Beskrivning</label>
        <input 
            type="text"
            id="description"
            name="description"
            value = {newComputer.description}
            onChange={handleChange} />
        <label htmlFor="maker">Märke</label>
        <input 
            type="text"
            id="maker"
            name="maker"
            value = {newComputer.maker}
            onChange={handleChange} />
        <label htmlFor="screenType">Skärm</label>
        <input 
            type="text"
            id="screenType"
            name="screenType"
            value = {newComputer.screenType}
            onChange={handleChange} />
        <label htmlFor="price">Pris</label>
        <input 
            type="number"
            id="price"
            name="price"
            value = {newComputer.price}
            onChange={handleChange} />
        <button onClick={handleClick}>Ändra</button>
    </form>
    )
}