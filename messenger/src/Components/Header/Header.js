import {NavLink} from 'react-router-dom';

import './Header.styles.css';

export const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive })=> isActive && 'activeNav'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chat' className={({ isActive })=> isActive && 'activeNav'}>Chats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={({ isActive })=> isActive && 'activeNav'}>Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}