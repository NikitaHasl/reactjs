import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import Pagination from "@mui/material/Pagination";

import {getCharacters} from "../../store/characters/actions";
import {
    selectCharacters,
    selectCharactersCount,
    selectCharactersError,
    selectCharactersPages,
    selectCharactersStatus,
} from "../../store/characters/selectors";
import {FETCH_STATUSES} from "../../utils/constants";
import "./Characters.styles.css";

export const Characters = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector(selectCharacters);
    const error = useSelector(selectCharactersError);
    const status = useSelector(selectCharactersStatus);
    const charactersCount = useSelector(selectCharactersCount);
    const pagesCount = useSelector(selectCharactersPages);

    const { page } = useParams();

    const sendRequest = (page) => {
        dispatch(getCharacters(page));
    }

    const handleChange = (event, page) => {
        navigate(`/characters/page/${page}`);
    }

    useEffect(() => {
        sendRequest(page);
    }, [page]);
    return (
        <div>
            <div className='header'>
                <h1>RickAndMorty page { page }</h1>
                <p>Total characters: {charactersCount}</p>
            </div>
            { status === FETCH_STATUSES.REQUEST && <CircularProgress sx={{display: 'flex', margin: "0 auto"}}/>}
            { error &&
                <div className='error'>
                    <h4 className='error-message'>{error}</h4>
                    <button className='error-button' onClick={()=>{sendRequest(page)}}>Send</button>
                </div>
            }
            <div className="characters">
                {data.map((item) => (
                    <div className='character' key={item.id}>
                        <img src={item.image} alt=""/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <Pagination count={+pagesCount} page={+page} onChange={handleChange} sx={{display: 'flex', justifyContent: 'center'}}/>
        </div>

    )
}