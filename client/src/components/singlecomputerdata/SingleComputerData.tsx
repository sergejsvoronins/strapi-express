import { useNavigate, useOutletContext } from "react-router-dom";
import { IMySingleComputerContext } from "../singlecomputer/SingleComputer";

export const SingleComputerData= () => {
    const { computer } = useOutletContext<IMySingleComputerContext>();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/computers`);
    }
    return (
        <>
            <h3>{computer?.name}</h3>
            <p>{computer?.description}</p>
            <p>{computer?.maker}</p>
            <p>{computer?.screenType}</p>
            <p>{computer?.price}:-</p>
            <button onClick={goBack}>Tillbaka</button>
        </>
    )
}