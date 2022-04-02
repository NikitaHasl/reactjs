import {Message} from "../Message/Message";
import PropTypes from "prop-types";

export const MessageList = ({ messages }) => (
    messages.map((msg, id) => <Message author={msg.author} text={msg.text} key={id}/>)
)

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}