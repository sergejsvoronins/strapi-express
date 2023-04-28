import { useNavigate, useOutletContext, useParams } from "react-router-dom"
import { IMySingleAudioContext } from "../singleaudio/SingleAudio"

export const SingleAudioData = () => {
    const { audio } = useOutletContext<IMySingleAudioContext>();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/audio`);
    }
    return (
        <>
            <h3>{audio?.name}</h3>
            <p>{audio?.description}</p>
            <p>{audio?.maker}</p>
            <p>{audio?.effect} W</p>
            <p>{audio?.price}:-</p>
            <button onClick={goBack}>Tillbaka</button>
        </>
    )
}