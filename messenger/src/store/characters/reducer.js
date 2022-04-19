import {FETCH_STATUSES} from "../../utils/constants";
import {
    GET_CHARACTERS_FAILURE,
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
} from "./actions";

const initialState = {
    data: [],
    info: {},
    status: FETCH_STATUSES.IDLE,
    error: null,
}

export const charactersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHARACTERS_REQUEST: {
            return {
                ...state,
                status: FETCH_STATUSES.REQUEST,
                error: null,
            }
        }

        case GET_CHARACTERS_FAILURE: {
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: payload,
            }
        }

        case GET_CHARACTERS_SUCCESS: {
            return {
                ...state,
                status: FETCH_STATUSES.SUCCESS,
                data: payload.results,
                info: payload.info,
            }
        }

        default:
            return state;
    }
}