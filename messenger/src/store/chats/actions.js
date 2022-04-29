import {onChildAdded, onChildRemoved, remove, set} from "firebase/database";
import {chatsRef, getChatRefById} from "../../services/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const CLEAR_ALL_CHATS = "CHATS::CLEAR_ALL_CHATS";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const clearAllChats = {
    type: CLEAR_ALL_CHATS,
};

let unsubscribe;

export const initChatsTrack = () => (dispatch) => {
    dispatch(clearAllChats);
    const unsubscribeAdded = onChildAdded(chatsRef, snapshot => {
        dispatch(addChat(snapshot.val()));
    })

    const unsubscribeDeleted = onChildRemoved(chatsRef, snapshot => {
        dispatch(deleteChat(snapshot.val().id));
    })

    unsubscribe = () => {
        unsubscribeAdded();
        unsubscribeDeleted();
    }
}

export const stopChatsTrack = () => () => {
    unsubscribe();
}

export const addChatFB = (newChat) => () => {
    set(getChatRefById(newChat.id), newChat);
}

export  const deleteChatFB = (id) => () => {
    remove(getChatRefById(id));
}