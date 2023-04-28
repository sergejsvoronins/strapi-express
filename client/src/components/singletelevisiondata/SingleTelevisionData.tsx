import { useNavigate, useOutletContext } from "react-router-dom";
import { IMySingleTelevisionContext } from "../singletelevision/SingleTelevision";

export const SingleTelevisionData = () => {
    const { television } = useOutletContext<IMySingleTelevisionContext>();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/televisions`);
    }
    return (
        <>
            <h3>{television?.name}</h3>
            <p>{television?.description}</p>
            <p>{television?.maker}</p>
            <p>{television?.screenSize}</p>
            <p>{television?.price}:-</p>
            <button onClick={goBack}>Tillbaka</button>
        </>
    )
}