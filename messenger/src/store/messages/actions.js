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