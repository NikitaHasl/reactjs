import './App.css';

import {useEffect, useState} from "react";
import {Form} from "./Components/Form/Form";
import {MessageList} from "./Components/MessageList/MessageList";
import {ChatList} from "./Components/ChatList/ChatList";

import {AUTHORS} from "./utils/constants";
import {Box} from "@mui/material";

const chatListArr = [
    {
        id: 0,
        name: 'Dave',
    },
    {
        id: 1,
        name: 'Nikole',
    },
    {
        id: 2,
        name: 'John',
    },
];
function App() {
    const [messageList, setMessageList] = useState([]);

    const addMessage = (text, author = AUTHORS.human) => {
        setMessageList([...messageList, {author: author, text: text}]);
    }

    useEffect(() => {
        let timeout;
        if(messageList[messageList.length - 1]?.author === AUTHORS.human){
            timeout = setTimeout(()=>{
                addMessage('message send', AUTHORS.robot);
            }, 1500);
        };

        return () => {
            clearTimeout(timeout);
        }
    }, [messageList]);

    return (
        <div className="App">
            <ChatList chatList={chatListArr}/>
            <Box>
                <MessageList messages={messageList}/>
                <Form addMessage={addMessage}/>
            </Box>

        </div>
    );
}

export default App;
