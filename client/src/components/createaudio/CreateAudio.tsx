import { ChangeEvent, FormEvent, useState } from "react"
import { IAudio } from "../../models/IAudio"
import { useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";
import { addAudio } from "../../services/expressService";

export const CreateAudio = () => {
    const [newAudio, setNewAudio] = useState<IAudio>(
        {
            name: "",
            description: "",
            maker: "",
            effect: 0,
            price: 0
        }
    );
    const [created, setCreated] = useState<string>("");
    const { token } = useOutletContext<IMyContext>(); 
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newAudio, [e.target.name]:e.target.value};
        setNewAudio(temp);
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleClick = async () => {
        try {
            let response: string = await addAudio(token, newAudio);
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
            <label htmlFor="effect">Effekt</label>
            <input 
                type="number"
                id="effect"
                name="effect"
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