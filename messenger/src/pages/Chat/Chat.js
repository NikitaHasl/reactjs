import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {AUTHORS} from "../../utils/constants";
import {NoChat} from "../../Components/NoChat/NoChat";
import {ChatList} from "../../Components/ChatList/ChatList";
import {MessageList} from "../../Components/MessageList/MessageList";
import {Form} from "../../Components/Form/Form";
import "./Chat.styles.css";


const initMessages = {
    'Dave': [],
    'Nik': [],
    'Ann': [],
};

export default function Chat() {
    const [messageList, setMessageList] = useState(initMessages);
    const {id} = useParams();

    const addMessage = (text, author = AUTHORS.human) => {
        setMessageList({...messageList, [id]: [...messageList[id], {text: text, author: author}]});
    }
    useEffect(() => {
        let timeout;
        const lastMsg = messageList[id]?.[messageList[id]?.length - 1]
        if (lastMsg?.author === AUTHORS.human) {
            timeout = setTimeout(() => {
                addMessage('message send', AUTHORS.robot);
            }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [messageList]);

    return (
        <div className='chat'>
            <div className='chat-list'>
                <ChatList chatList={messageList}/>
            </div>
            <div className="chat-item">
                {
                    messageList[id] ?
                        <>
                            <MessageList messages={messageList[id]}/>
                            <Form addMessage={addMessage}/>
                        </> :
                        <NoChat/>
                }
            </div>
        </div>

    );
}