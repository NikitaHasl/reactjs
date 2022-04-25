import {useDispatch, useSelector} from "react-redux";

import {selectChats} from "../../store/chats/selectors";
import {addChatFB, deleteChatFB, initChatsTrack, stopChatsTrack} from "../../store/chats/actions";
import {
    addMessagesFB,
    deleteMessagesFB,
    initMessagesTrack,
    stopMessagesTrack
} from "../../store/messages/actions";
import {ChatList} from "./ChatList";
import {useEffect} from "react";

export const ChatListContainer = () => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch()

    const addNewChat = (newChat) => {
        dispatch(addChatFB(newChat));
        dispatch(addMessagesFB(newChat.id));
    }

    const removeChat = (id) => {
        dispatch(deleteChatFB(id));
        dispatch(deleteMessagesFB(id));
    }

    const handleSubmit = (name) => {
        const newChat = {
            name: name,
            id: Date.now(),
        };
        addNewChat(newChat);
    }

    useEffect(() => {
        dispatch(initChatsTrack());
        dispatch(initMessagesTrack());
        return () => {
            dispatch(stopChatsTrack());
            dispatch(stopMessagesTrack());
        }
    }, []);

    return <ChatList chats={chats} handleSubmit={handleSubmit} removeChat={removeChat}/>
}