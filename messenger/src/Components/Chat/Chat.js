import {ListItem} from "@mui/material";
import PropTypes from "prop-types";

export const Chat = ({ id, name}) => {
    return(
        <ListItem key={id} sx={{backgroundColor: '#f1f1f1'}}>{name}</ListItem>
    )
}

Chat.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
}