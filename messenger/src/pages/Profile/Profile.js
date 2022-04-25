import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {
    initProfileTrack,
    setNameFB,
    setShowNameFB,
    stopProfileTrack,
} from "../../store/profile/actions";
import {Form} from "../../Components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {logOut} from "../../services/firebase";

export const Profile = () => {

    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleChange = (event) => {
        dispatch(setShowNameFB(event.target.checked));
    }

    const handleSubmit = (name) => {
        dispatch(setNameFB(name));
    }

    useEffect(() => {

        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, []);

    return (
        <>
            <h1>Profile page</h1>
            <button onClick={logOut}>Logout</button>
            <label>
                <input type="checkbox" onChange={handleChange} checked={showName}/>
                Show name
            </label>
            {showName && <h3>{name}</h3>}
            <Form onSubmit={handleSubmit}/>
        </>
    )
}