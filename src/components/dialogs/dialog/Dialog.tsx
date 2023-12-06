import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {dataUserList} from "../../../data/data";

export const Dialog = () => {
    return (
        <div>
            <ul>
                {dataUserList.map(user => {
                    return(
                        <li className={s.user}>
                            <NavLink activeClassName={s.active} to={user.path}>{user.userName}</NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};