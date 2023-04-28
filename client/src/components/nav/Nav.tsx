import { Link } from "react-router-dom"
import "./Nav.scss";

interface INavProps {
    userIsLoggedIn: boolean,
    userName:string
}
export const Nav = (props: INavProps) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/audio">Audio</Link>
                </li>
                <li>
                    <Link to="/mobiles">Mobiles</Link>
                </li>
                <li>
                    <Link to="/computers">Computers</Link>
                </li>
                <li>
                    <Link to="/televisions">TV</Link>
                </li>
                {props.userIsLoggedIn ? 
                <li>
                    <Link to="/user">{props.userName}</Link>
                </li> :
                <li>
                    <Link to="/login">Logga in</Link>
                </li>
                }
                
            </ul>
        </nav>
    )
}