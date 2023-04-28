import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { IMyContext } from "../../App"
import { loginUser } from "../../services/expressService";
import { IUser } from "../../models/IUser";
import { ChangeEvent, FormEvent, useState } from "react";


export const Login = () => {
    const { loginMessage, createToken } = useOutletContext<IMyContext>();
            const [ user, setUser ] = useState<IUser>({
                username:"",
                password: ""
            })
    const navigate = useNavigate();
    const { showUserName, changeUserStatus } = useOutletContext<IMyContext>();
    const handleClick = async () => {
        let response = await loginUser(user);
        if(response){
            showUserName(user.username);
            createToken(response);
            changeUserStatus(true);
            setUser({
                username:"",
                password: ""
            })
            navigate("/")
        }
        else {
            navigate("/login")
        }
        
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let temp = {...user, [e.target.name]:e.target.value};
        setUser(temp);
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>{loginMessage}</h3>
            <label htmlFor="name">Namn</label>
            <input 
                type = "text" 
                id = "name" 
                name = "username"
                value = {user.username}
                onChange = {handleChange}/>
            <label htmlFor="password">Lösenord</label>
            <input 
                type = "text"
                id = "password"
                name = "password"
                value = {user.password}
                onChange = {handleChange}/>
            <button type="button" onClick={handleClick}>Logga in</button>
            <h4><Link to="/register">Registrera</Link></h4>
        </form>
    )
}