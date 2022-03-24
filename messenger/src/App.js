import logo from './logo.svg';
import './App.css';

import {Message} from "./Components/Message/Message";

const msg = "Hello world!";

function App() {
    return (
        <div className="App">
            <Message msg={msg}/>
        </div>
    );
}

export default App;
