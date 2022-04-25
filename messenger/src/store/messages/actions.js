import {AUTHORS} from "../../utils/constants";
import {onChildAdded, onChildRemoved, push, remove, set} from "firebase/database";
import {getMessageListRefById, getMessageRefById, messagesRef} from "../../services/firebase";

export const SET_MESSAGE = 'MESSAGES::SET_MESSAGE';
export const ADD_MESSAGES = 'MESSAGES::ADD_MESSAGES';
export const DELETE_MESSAGES = 'MESSAGES::DELETE_MESSAGES';
export const CLEAR_ALL_MESSAGES = 'MESSAGES::CLEAR_ALL_MESSAGES';
export const CLEAR_CHAT_MESSAGES = 'MESSAGES::CLEAR_CHAT_MESSAGES';

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

export const clearAllMessages = {
    type: CLEAR_ALL_MESSAGES,
}

export const clearChatMessages = (id) => ({
    type: CLEAR_CHAT_MESSAGES,
    payload: id,
});

let timeout;

export const addMessageWithApply = (newMessage, chatId) => () => {
    push(getMessageListRefById(chatId), newMessage);

    clearTimeout(timeout);
    if (newMessage?.author === AUTHORS.human) {
        timeout = setTimeout(() => {
            push(getMessageListRefById(chatId), {
                text: 'message send',
                author: AUTHORS.robot,
                id: newMessage.id,
            });
        }, 1500);
    }
}


let unsubscribeMessagesTrack, unsubscribeMessageOnChatTrack;

export const initMessagesTrack = () => (dispatch) => {
    dispatch(clearAllMessages);
    const unsubscribeAdd = onChildAdded(messagesRef, snapshot => {
        dispatch(addMessages(snapshot.key));
    });

    const unsubscribeRemove = onChildRemoved(messagesRef, snapshot => {
        dispatch(deleteMessages(snapshot.key));
    });

    unsubscribeMessagesTrack = () => {
        unsubscribeAdd();
        unsubscribeRemove();
    }
}

export const initMessageOnChatTrack = (id) => (dispatch) => {
    if (id) {
        dispatch(clearChatMessages(id));
        unsubscribeMessageOnChatTrack = onChildAdded(getMessageListRefById(id), snapshot => {
            dispatch(setMessage(snapshot.val()));
        })
    }
}

export const stopMessagesTrack = () => () => {
    unsubscribeMessagesTrack();
}

export const stopMessageOnChatTrack = (id) => () => {
    if (id) {
        unsubscribeMessageOnChatTrack();
    }
}

export const addMessagesFB = (id) => () => {
    set(getMessageRefById(id), {exists: true});
}

export const deleteMessagesFB = (id) => () => {
    remove(getMessageRefById(id));
}