import './App.css';


import {Message} from "./Components/Message/Message";
import {useEffect, useState} from "react";
import {Form} from "./Components/Form/Form";

function App() {
    const [messageList, setMessageList] = useState([]);

    const addMessage = (text, author = 'Nikita') => {
        setMessageList([...messageList, {author: author, text: text}]);
    }

    useEffect(() => {
        if (messageList.length > 0){
            const author = messageList[messageList.length - 1].author;
            author === "Nikita" && setTimeout(()=>{
                addMessage('message send', 'robot');
            }, 1500);
        }
    }, [messageList]);

    return (
        <div className="App">
            {messageList.map((msg, id) => <Message author={msg.author} text={msg.text} key={id}/>)}
            <Form addMessage={addMessage}/>
        </div>
    );
}

export default App;
