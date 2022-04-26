import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63243131_3xl.jpg?impolicy=HighCarrousel'></img>
    </div>
    <div>
      ava+descrip
    </div>
    <MyPosts />
    <Post message="Hey it's my 1'st post" l="15"/>
    <Post message="The weather is fine today!" l="20"/>
  </div>
} 

export default Profile;