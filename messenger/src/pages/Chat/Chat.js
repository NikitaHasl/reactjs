import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {AUTHORS} from "../../utils/constants";
import {NoChat} from "../../Components/NoChat/NoChat";
import {ChatList} from "../../Components/ChatList/ChatList";
import {MessageList} from "../../Components/MessageList/MessageList";
import {Form} from "../../Components/Form/Form";
import "./Chat.styles.css";
import {selectMessages} from "../../store/messages/selectors";
import {setMessage} from "../../store/messages/actions";

export default function Chat() {

    const {id} = useParams();

    const messages = useSelector(selectMessages);

    const dispatch = useDispatch();

    const addMessage = (newMessage) => {
        dispatch(setMessage(newMessage));
    }

    const sendMessage = (text) => {
        addMessage({
            text,
            author: AUTHORS.human,
            id,
        });
    }

    useEffect(() => {
        let timeout;
        const lastMsg = messages[id]?.[messages[id]?.length - 1]
        if (lastMsg?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage({
                    text: 'message send',
                    author: AUTHORS.robot,
                    id,
                });
            }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [messages]);

    return (
        <div className='chat'>
            <div className='chat-list'>
                <ChatList/>
            </div>
            <div className="chat-item">
                {
                    messages[id] ?
                        <>
                            <MessageList messages={messages[id]}/>
                            <Form onSubmit={sendMessage} id={id}/>
                        </> :
                        <NoChat/>
                }
            </div>
        </div>

    );
}