import {useDispatch, useSelector} from "react-redux";

import {toggleCheckbox} from "../../store/profile/actions";

export const Profile = () => {

    const dispatch = useDispatch();
    const {name, showName} = useSelector(state => state);
    const handleChange = () => {
        dispatch(toggleCheckbox);
    }

    return (
        <>
            <h1>Profile page</h1>
            <label>
                <input type="checkbox" onChange={handleChange}/>
                Show name
            </label>
            {showName && <h3>{name}</h3>}
        </>
    )
}