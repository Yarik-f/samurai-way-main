import React from 'react';
import header from "../../icon-header.svg";
import './Header.css'

export const Header = () => {
    return (
        <header className={'header'}>
            <img src={header} alt=""/>
        </header>
    );
};
