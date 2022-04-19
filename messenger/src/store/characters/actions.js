import {apiCharactersUrl} from "../../utils/constants";

export const GET_CHARACTERS_REQUEST = 'CHARACTERS::GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'CHARACTERS::GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'CHARACTERS::GET_CHARACTERS_FAILURE';

export const getCharactersRequest = () => ({
    type: GET_CHARACTERS_REQUEST,
});

export const getCharactersSuccess = (data) => ({
    type: GET_CHARACTERS_SUCCESS,
    payload: data,
})

export const getCharactersFailure = (error) => ({
    type: GET_CHARACTERS_FAILURE,
    payload: error,
})

export const getCharacters = () => async (dispatch) =>{
    try {
        dispatch(getCharactersRequest());
        const response = await fetch(apiCharactersUrl);
        if (!response.ok){
            throw new Error(`Response failed with status ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        dispatch(getCharactersSuccess(result));
    } catch(e) {
        dispatch(getCharactersFailure(e.message));
    }
}