import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};
