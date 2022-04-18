import {AUTHORS} from "../../utils/constants";

export const SET_MESSAGE = 'MESSAGES::SET_MESSAGE';
export const ADD_MESSAGES = 'MESSAGES::ADD_MESSAGES';
export const DELETE_MESSAGES = 'MESSAGES::DELETE_MESSAGES';

export const setMessage = (newMessage) => ({
    type: SET_MESSAGE,
    payload: newMessage,
});

export const addMessages = (id) => ({
    type: ADD_MESSAGES,
    payload: id,
});

export const deleteMessages = (id) => ({
    type: DELETE_MESSAGES,
    payload: id,
});

let timeout;

export const addMessageWithApply = (newMessage) => (dispatch) => {
    dispatch(setMessage(newMessage));

    clearTimeout(timeout);
    if (newMessage?.author === AUTHORS.human) {
        timeout = setTimeout(() => {
            dispatch(setMessage({
                text: 'message send',
                author: AUTHORS.robot,
                id: newMessage.id,
            }))
        }, 1500);
    }
}