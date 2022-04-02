import {Chat} from "../Chat/Chat";
import {List} from "@mui/material";
import PropTypes from "prop-types";


export const ChatList = ({ chatList }) => {
    return(
        <List>{chatList.map((chatItem) => <Chat name={chatItem.name} id={chatItem.id}/>)}</List>
    )
}

ChatList.propTypes={
    chatList: PropTypes.array.isRequired,
}