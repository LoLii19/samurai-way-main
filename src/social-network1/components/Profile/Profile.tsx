import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs='/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}
  export default Profile;