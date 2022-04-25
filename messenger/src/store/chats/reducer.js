import {ADD_CHAT, CLEAR_ALL_CHATS, DELETE_CHAT} from "./actions";

export const chatsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_CHAT: {
            return [
                ...state,
                payload,
            ]
        }

        case DELETE_CHAT: {
            return state.filter(({id}) => id !== payload);
        }

        case CLEAR_ALL_CHATS: {
            return [];
        }

        default:
            return state;
    }
}