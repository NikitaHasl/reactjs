import {useState} from "react";

import './Form.styles.css';

export const Form = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMessage(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit" value='Send'/>
        </form>
    )
}