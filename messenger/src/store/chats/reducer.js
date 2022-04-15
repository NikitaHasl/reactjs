import {ADD_CHAT, DELETE_CHAT} from "./actions";

const initialState = [
    {
        name: 'Dave',
        id: 0,
    },
    {
        name: 'Ann',
        id: 1,
    },
    {
        name: 'John',
        id: 2,
    },
];

export const chatsReducer = (state = initialState, {type, payload}) => {
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

        default:
            return state;
    }
}