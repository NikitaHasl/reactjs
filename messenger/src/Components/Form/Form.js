import {useState} from "react";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";
import './Form.styles.css';


export const Form = ({addMessage}) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addMessage(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextField variant={'standard'} value={value} onChange={handleChange} type={'text'} sx={{width: '70%', marginRight: '15px', marginLeft:'5px'}}/>
            <Button variant={'outlined'} endIcon={<SendIcon/>} type={'submit'}>Send</Button>
        </form>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}