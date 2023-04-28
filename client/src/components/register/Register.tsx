import { ChangeEvent, FormEvent, useState } from "react"
import { IUser } from "../../models/IUser"
import { registerUser } from "../../services/expressService";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IMyContext } from "../../App";

export const Register = () => {
    const { showLoginMessage } = useOutletContext<IMyContext>();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<IUser>(
        {
            username:"",
            password: ""
        }
    );
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...newUser, [e.target.name]:e.target.value};
        setNewUser(temp);
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleClick = async () => {
        let response = await registerUser(newUser);
        if(response) {
            showLoginMessage("Nu kan du logga in");
            navigate("/login");
            setNewUser(
                {
                    username:"",
                    password: ""
                }
            );
        }
        else {
            console.log("något gick fel");
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn</label>
        <input 
            type = "text" 
            id = "name" 
            name = "username"
            value={newUser.username}
            onChange = {handleChange}/>
        <label htmlFor="password">Lösenord</label>
        <input 
            type = "text"
            id = "password"
            name = "password" 
            value={newUser.password}
            onChange = {handleChange}/>
        <button type="submit" onClick={handleClick}>Registrera</button>
    </form>
    )
}