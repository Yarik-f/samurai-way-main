import React from 'react';
import s from './Messages.module.css'
import {Route} from "react-router-dom";
import {dataUserList} from "../../../data/data";

export const Messages = () => {
    return (
        <div>
            {dataUserList.map(user => {
                return (
                    <Route path={user.path}>
                        {user.messages.map(m => {
                            return(
                                <div className={s.message}>
                                    <div className={s.user}>{m.userMessages}</div>
                                    <div className={s.my}>{m.myMessages}</div>
                                </div>
                            )
                        })}
                    </Route>
                )

            })}
        </div>

    );
};