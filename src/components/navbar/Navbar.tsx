import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <Link to={'/profile'}>Profile</Link>
            </div>
            <div className={s.active}>
                <Link to={'/dialogs'}>Messages</Link>
            </div>
            <div>
                <Link to={'/news'}>News</Link>
            </div>
            <div>
                <Link to={'/music'}>Music</Link>
            </div>
            <div>
                <Link to={'/settings'}>Settings</Link>
            </div>
        </nav>
    );
};
