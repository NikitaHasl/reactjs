import {onValue, set} from "firebase/database";
import {userNameRef, userShowNameRef} from "../../services/firebase";

export const SET_CHECKBOX = 'PROFILE::SET_CHECKBOX';
export const SET_NAME = 'PROFILE::SET_NAME';

export const setCheckbox = (checkbox) => ({
    type: SET_CHECKBOX,
    payload: checkbox,
});

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});

let unsubscribe;

export const initProfileTrack = () => (dispatch) =>{
    const unsubscribeName = onValue(userNameRef, (snapshot)=>{
        dispatch(setName(snapshot.val()));
    });

    const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
        dispatch(setCheckbox(snapshot.val()));
    });

    unsubscribe = () => {
        unsubscribeName();
        unsubscribeShowName();
    }
}

export const stopProfileTrack = () => () => {
    unsubscribe();
}

export const setNameFB = (name) => () => {
    set(userNameRef, name);
}

export const setShowNameFB = (flag) => () =>{
    set(userShowNameRef, flag);
}
