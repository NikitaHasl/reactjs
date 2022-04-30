import {apiCharactersUrl} from "../../utils/constants";

export const GET_CHARACTERS_REQUEST = 'CHARACTERS::GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'CHARACTERS::GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'CHARACTERS::GET_CHARACTERS_FAILURE';

export const getCharactersRequest = (query) => ({
    type: GET_CHARACTERS_REQUEST,
    payload: query,
});

export const getCharactersSuccess = (data) => ({
    type: GET_CHARACTERS_SUCCESS,
    payload: data,
})

export const getCharactersFailure = (error) => ({
    type: GET_CHARACTERS_FAILURE,
    payload: error,
})

export const getCharacters = (page = 1) => async (dispatch) =>{
    try {
        const request = `${apiCharactersUrl}/?page=${page}`;
        dispatch(getCharactersRequest(request));
        const response = await fetch(request);
        if (!response.ok){
            throw new Error(`Response failed with status ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        dispatch(getCharactersSuccess(result));
    } catch(e) {
        dispatch(getCharactersFailure(e.message));
    }
}