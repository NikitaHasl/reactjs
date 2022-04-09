import {Message} from "../Message/Message";
import PropTypes from "prop-types";

import "./Messages.style.css"

export const MessageList = ({ messages }) => (
    <div className='messages'>
        {messages.map((msg, id) => <Message author={msg.author} text={msg.text} key={id}/>)}
    </div>

)

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}