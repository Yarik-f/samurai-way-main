import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    src: string
    title: string
}

const Post = (props: PostPropsType) => {

    const {src, title} = props


    return (
        <div className={s.post}>
            <img
                src={src}
                alt=""
            />
            {title}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;