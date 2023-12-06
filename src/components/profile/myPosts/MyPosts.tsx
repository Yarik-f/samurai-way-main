import React from 'react';
import Post from "./post/Post";
import {dataPost} from "../../../data/data";




export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {dataPost.map((post) => {
                return (
                    <Post src={post.src} title={post.title}/>
                )
            })}

        </div>
    );
};
