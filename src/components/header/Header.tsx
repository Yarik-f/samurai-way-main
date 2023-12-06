import React from 'react';
import header from "../../icon-header.svg";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={header} alt=""/>
        </header>
    );
};
