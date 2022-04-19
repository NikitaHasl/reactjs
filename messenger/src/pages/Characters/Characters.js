import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters} from "../../store/characters/actions";
import {
    selectCharacters, selectCharactersError, selectCharactersStatus,
} from "../../store/characters/selectors";
import {FETCH_STATUSES} from "../../utils/constants";
import {useParams} from "react-router-dom";
import "./Characters.styles.css";
import {CircularProgress} from "@mui/material";


export const Characters = () => {

    const dispatch = useDispatch();
    const data = useSelector(selectCharacters);
    const error = useSelector(selectCharactersError);
    const status = useSelector(selectCharactersStatus);

    const { page } = useParams();

    const sendRequest = () => {
        dispatch(getCharacters());
    }

    useEffect(() => {
        sendRequest();
    }, []);
    return (
        <div>
            <h1 className='header'>RickAndMorty page</h1>
            { status === FETCH_STATUSES.REQUEST && <CircularProgress sx={{display: 'flex', margin: "0 auto"}}/>}
            { error &&
                <div className='error'>
                    <h4 className='error-message'>{error}</h4>
                    <button className='error-button' onClick={sendRequest(page)}>Send</button>
                </div>
            }
            {data.map((article) =>(
                <li>{article.title}</li>
            ))}
            {/*<div className="characters">*/}
            {/*    {data.map((item) => (*/}
            {/*        <div className='character' key={item.id}>*/}
            {/*            <img src={item.image} alt=""/>*/}
            {/*            <p>{item.name}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>

    )
}