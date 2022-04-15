import {List, ListItem, ListItemButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Form} from "../Form/Form";
import {selectChats} from "../../store/chats/selectors";
import {addChat, deleteChat} from "../../store/chats/actions";
import {addMessages, deleteMessages} from "../../store/messages/actions";
export const ChatList = () => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const addNewChat = (newChat) => {
        dispatch(addChat(newChat));
        dispatch(addMessages(newChat.id));
    }

    const removeChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(deleteMessages(id));
    }

    const handleSubmit = (name) => {
        const newChat = {
            name: name,
            id: Date.now(),
        };
        addNewChat(newChat);
    }

    return (
        <>
            <List>
                {chats.map(({name, id}) => (
                    <ListItem key={id}>
                        <ListItemButton component={Link} to={`/chat/${id}`}>
                            {name}
                        </ListItemButton>
                        <DeleteIcon onClick={() => removeChat(id)}/>
                    </ListItem>
                ))}
            </List>
            <Form onSubmit={handleSubmit}/>
        </>

    )
}