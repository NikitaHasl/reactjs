import './App.css';
import {Route, Routes} from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <div className='App'>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/chat' element={<Chat/>}>
                        <Route path=':id' element={<Chat/>}/>
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
