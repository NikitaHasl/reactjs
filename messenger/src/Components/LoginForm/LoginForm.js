import {useState} from "react";

export const LoginForm = ({ onSubmit }) => {

    const [ login, setLogin ] = useState('');
    const [ pass, setPass ] = useState('');
    
    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    }

    const handleChangePass = (event) => {
        setPass(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ login, pass });
        setLogin('');
        setPass('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="email" value={login} onChange={handleChangeLogin} />
            <input type="password" value={pass} onChange={handleChangePass} />
            <input type="submit"/>
        </form>
    )
}