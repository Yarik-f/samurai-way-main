import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Messages} from "./messages/Messages";
import {dataUserList} from "../../data/data";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <Dialog/>
            <Messages/>
        </div>
    );
};