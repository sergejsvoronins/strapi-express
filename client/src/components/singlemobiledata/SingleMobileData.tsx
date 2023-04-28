import { useNavigate, useOutletContext } from "react-router-dom";
import { IMySingleMobileContext } from "../singlemobile/SingleMobile";

export const SingleMobileData= () => {
    const { mobile } = useOutletContext<IMySingleMobileContext>();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/mobiles`);
    }
    return (
        <>
            <h3>{mobile?.name}</h3>
            <p>{mobile?.description}</p>
            <p>{mobile?.maker}</p>
            <p>{mobile?.screenType}</p>
            <p>{mobile?.price}:-</p>
            <button onClick={goBack}>Tillbaka</button>
        </>
    )
}