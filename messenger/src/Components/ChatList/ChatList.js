import {List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";

export const ChatList = ({chatList}) => {
    const chats = [];
    for (let key in chatList) {
        chats.push(
            <ListItem key={key}>
                <Link to={`/chat/${key}`}>
                    {key}
                </Link>
            </ListItem>
        )
    }
    return (
        <List>{chats}</List>
    )
}