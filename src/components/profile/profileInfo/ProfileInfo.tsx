import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
            </div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    );
};
