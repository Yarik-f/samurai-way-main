import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {dataLink} from "../../data/data";
export const Navbar = () => {


    return (
        <nav className={s.nav}>
            {dataLink.map(link => {
                return(
                    <div>
                        <NavLink activeClassName={s.activeLink} to={link.path}>{link.title}</NavLink>
                    </div>
                )
            })}
        </nav>
    );
};
