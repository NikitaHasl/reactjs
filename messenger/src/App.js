import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";

import './App.css';
import Chat from "./pages/Chat/Chat";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {store} from "./store";

function App() {

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
