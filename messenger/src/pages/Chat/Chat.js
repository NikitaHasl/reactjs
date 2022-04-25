import {useEffect, useMemo} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {AUTHORS} from "../../utils/constants";
import {NoChat} from "../../Components/NoChat/NoChat";
import {MessageList} from "../../Components/MessageList/MessageList";
import {Form} from "../../Components/Form/Form";
import "./Chat.styles.css";
import {selectMessagesByChatId} from "../../store/messages/selectors";
import {addMessageWithApply, initMessageOnChatTrack, stopMessageOnChatTrack} from "../../store/messages/actions";
import {ChatListContainer} from "../../Components/ChatList/ChatListContainer";

export default function Chat() {

    const {id} = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const addMessage = (newMessage) => {
        dispatch(addMessageWithApply(newMessage, id));
    }

    const sendMessage = (text) => {
        addMessage({
            text,
            author: AUTHORS.human,
            id,
        });
    }

    useEffect(()=>{
        dispatch(initMessageOnChatTrack(id));

        return () => {
            dispatch(stopMessageOnChatTrack(id));
        }
    }, [id]);

    return (
        <div className='chat'>
            <div className='chat-list'>
                <ChatListContainer/>
            </div>
            <div className="chat-item">
                {
                    messages ?
                        <>
                            <MessageList messages={messages}/>
                            <Form onSubmit={sendMessage}/>
                        </> :
                        <NoChat/>
                }
            </div>
        </div>

    );
}