import {List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";

export const ChatList = ({chatList}) => {
    const chats = [];
    for (let key in chatList) {
        chats.push(
            <ListItem sx={{backgroundColor: '#f1f1f1'}}>
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