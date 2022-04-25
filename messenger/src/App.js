import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import './App.css';
import Chat from "./pages/Chat/Chat";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {persistor, store} from "./store";
import {Characters} from "./pages/Characters/Characters";
import {Page404} from "./pages/Page404/Page404";


function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header/>
                <div className='App'>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/chat' element={<Chat/>}>
                            <Route path=':id' element={<Chat/>}/>
                        </Route>
                        <Route path='/characters/page/:page' element={<Characters/>}/>
                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </div>
                <Footer/>
            </PersistGate>

        </Provider>
    );
}

export default App;
