import {SET_NAME, SET_CHECKBOX} from "./actions";

const initialState = {
    showName: false,
    name: '',
}

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type){
        case SET_CHECKBOX: {
            return {
                ...state,
                showName: payload,
            }
        }

        case SET_NAME: {
            return {
                ...state,
                name: payload,
            }
        }

        default:
            return state;
    }
}