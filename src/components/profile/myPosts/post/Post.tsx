import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    src: string
    title: string
    likesCount: number
}

const Post = (props: PostPropsType) => {

    const {src, title, likesCount} = props


    return (
        <div className={s.post}>
            <img
                src={src}
                alt=""
            />
            {title}
            <div>
                <span>Like</span>
                <span>{likesCount}</span>
            </div>
        </div>
    );
};

export default Post;