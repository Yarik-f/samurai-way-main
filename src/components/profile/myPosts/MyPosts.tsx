import React from 'react';
import './post/Post.css'
import Post from "./post/Post";

const data = [
    {
        src: 'https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*',
        title: 'Post 1'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRredPlvXq9le2bWcAsd03MYZyB8W8uHk9sag&usqp=CAU',
        title: 'Post 2'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRredPlvXq9le2bWcAsd03MYZyB8W8uHk9sag&usqp=CAU',
        title: 'Post 3'
    },
    {
        src: 'https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*',
        title: 'Post 4'
    }
]


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {data.map((post) => {
                return (
                    <Post src={post.src} title={post.title}/>
                )
            })}

        </div>
    );
};
