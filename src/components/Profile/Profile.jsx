import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import Post from "./MyPosts/Post/Post";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {

    return <div className={s.content}>
    <Profileinfo />
    <MyPosts posts={props.wanwi.dposts} addPost={props.addPost} />
  </div>
} 

export default Profile;