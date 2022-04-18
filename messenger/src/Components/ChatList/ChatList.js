import {List, ListItem, ListItemButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

import {Form} from "../Form/Form";

export const ChatList = ({ chats, removeChat, handleSubmit }) => {

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