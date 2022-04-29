import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';

import './App.css';
import Chat from "./pages/Chat/Chat";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {persistor, store} from "./store";
import {Characters} from "./pages/Characters/Characters";
import {Page404} from "./pages/Page404/Page404";
import {PrivateRoute} from "./Components/PrivateRoute/PrivateRoute";
import {PublicRoute} from "./Components/PublicRoute/PublicRoute";
import {auth} from "./services/firebase";


function App() {

    const [authed, setAuthed] = useState(false);

    const handleLogin = () => {
        setAuthed(true);
    }

    const handleLogout = () => {
        setAuthed(false)
    }

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                handleLogin();
            } else {
                handleLogout();
            }
        })

        return unsubscribe();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Header/>
                <div className='App'>
                    <Routes>
                        <Route path='/' element={<PublicRoute authed={authed}/>}>
                            <Route path='' element={<Home/>}/>
                            <Route path='signup' element={<Home isSignUp/>}/>
                        </Route>
                        <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
                            <Route path='' element={<Profile/>}/>
                        </Route>
                        <Route path='/chat' element={<PrivateRoute authed={authed}/>}>
                            <Route path='' element={<Chat/>}>
                                <Route path=':id' element={<Chat/>}/>
                            </Route>
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
