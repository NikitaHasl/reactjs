import {useDispatch, useSelector} from "react-redux";

import {setName, toggleCheckbox} from "../../store/profile/actions";
import {Form} from "../../Components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selectors";

export const Profile = () => {

    const dispatch = useDispatch();
    
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleChange = () => {
        dispatch(toggleCheckbox);
    }

    const handleSubmit = (name) => {
        dispatch(setName(name));
    }

    return (
        <>
            <h1>Profile page</h1>
            <label>
                <input type="checkbox" onChange={handleChange}/>
                Show name
            </label>
            {showName && <h3>{name}</h3>}
            <Form onSubmit={handleSubmit}/>
        </>
    )
}