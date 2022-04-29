import {Link} from "react-router-dom";
import {useState} from "react";

import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {logIn, signUp} from "../../services/firebase";

export const Home = ({isSignUp}) => {

    const [ error, setError ] = useState(null);

    const handleSubmit = async ({login, pass}) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }

    }

    return (
        <>
            <h1>Home page</h1>
            <LoginForm isSignUp={isSignUp} onSubmit={handleSubmit}/>
            { error && <h3>{ error }</h3>}
            <Link to={isSignUp ? '/' : '/signup'}>
                {isSignUp ? 'to login' : 'to signup'}
            </Link>
        </>
    )
}