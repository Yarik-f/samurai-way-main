import React from 'react';
import './Post.css'

type PostPropsType = {
    src: string
    title: string
}

const Post = (props: PostPropsType) => {


    return (
        <div className={'post'}>
            <img
                src={props.src}
                alt=""
            />
            {props.title}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;