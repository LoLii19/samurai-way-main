import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div>
            My posts
            <div>
               <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.content}>
                <Post message='Hi, how are you?' likesCount= {20} />
                <Post message="It's my first post" likesCount={10} />
        </div>
        </div>
)
}
  export default MyPosts;