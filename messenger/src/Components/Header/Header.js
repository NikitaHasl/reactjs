import { NavLink } from 'react-router-dom';

import './Header.styles.css';

export const Header = () => {
    const activeLinkClassName = (isActive) => isActive ? 'active-link' : undefined;

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive })=> activeLinkClassName(isActive)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/chat' className={({ isActive })=> activeLinkClassName(isActive)}>Chats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={({ isActive })=> activeLinkClassName(isActive)}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/characters/page/1' className={({ isActive })=> activeLinkClassName(isActive)}>Rick and Morty</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}