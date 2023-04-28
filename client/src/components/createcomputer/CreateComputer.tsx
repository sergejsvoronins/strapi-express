import { ChangeEvent, FormEvent, useState } from "react"
import { useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";
import { addComputer, addMobile } from "../../services/expressService";
import { IComputer } from "../../models/IComputer";

export const CreateComputer = () => {
    const [newComputer, setNewComputer] = useState<IComputer>(
        {
            name: "",
            description: "",
            maker: "",
            screenType: "",
            price: 0
        }
    );
    const [created, setCreated] = useState<string>("");
    const { token } = useOutletContext<IMyContext>(); 
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newComputer, [e.target.name]:e.target.value};
        setNewComputer(temp);
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleClick = async () => {
        try {
            let response: string = await addComputer(token, newComputer);
            setCreated("Produkt är skapad");

        }
        catch {
            setCreated("Du ska vara inloggad");

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Namn</label>
            <input 
                type="text"
                id="name"
                name="name"
                onChange={handleChange} />
            <label htmlFor="description">Beskrivning</label>
            <input 
                type="text"
                id="description"
                name="description"
                onChange={handleChange} />
            <label htmlFor="maker">Märke</label>
            <input 
                type="text"
                id="maker"
                name="maker"
                onChange={handleChange} />
            <label htmlFor="screenType">Skärm</label>
            <input 
                type="text"
                id="screenType"
                name="screenType"
                onChange={handleChange} />
            <label htmlFor="price">Pris</label>
            <input 
                type="number"
                id="price"
                name="price"
                onChange={handleChange} />
            <button onClick={handleClick}>Skapa</button>
            <h3>{created}</h3>
        </form>
        
    )
}