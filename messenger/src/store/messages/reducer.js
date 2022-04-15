import {ADD_MESSAGES, DELETE_MESSAGES, SET_MESSAGE} from "./actions";

const initialState = {
    0: [],
    1: [],
    2: [],
};

export const messagesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MESSAGE: {
            return {
                ...state,
                [payload.id]: [
                    ...state[payload.id],
                    {text: payload.text, author:payload.author},
                ],
            }
        }

        case ADD_MESSAGES: {
            return {
                ...state,
                [payload]: [],
            }
        }

        case DELETE_MESSAGES: {
            const copyState = {...state};
            delete copyState[payload];
            return copyState;
        }

        default:
            return state;
    }
}