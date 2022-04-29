import {ADD_MESSAGES, CLEAR_ALL_MESSAGES, CLEAR_CHAT_MESSAGES, DELETE_MESSAGES, SET_MESSAGE} from "./actions";

export const messagesReducer = (state = {}, {type, payload}) => {
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

        case CLEAR_ALL_MESSAGES: {
            return {};
        }

        case CLEAR_CHAT_MESSAGES: {
            return {
                ...state,
                [payload]: [],
            }
        }

        default:
            return state;
    }
}