import {useDispatch, useSelector} from "react-redux";

import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {addMessages, deleteMessages} from "../../store/messages/actions";
import {ChatList} from "./ChatList";

export const ChatListContainer = () => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const addNewChat = (newChat) => {
        dispatch(addChat(newChat));
        dispatch(addMessages(newChat.id));
    }

    const removeChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(deleteMessages(id));
    }

    const handleSubmit = (name) => {
        const newChat = {
            name: name,
            id: Date.now(),
        };
        addNewChat(newChat);
    }

    return <ChatList chats={chats} handleSubmit={handleSubmit} removeChat={removeChat}/>
}